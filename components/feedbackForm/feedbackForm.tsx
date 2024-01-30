'use client'
import React, { useState } from 'react';
import { FeedbackFormProps } from './feedbackForm.props';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import {IFeedbackForm, IFeedbackSentResponse} from "@/components/feedbackForm/feedbackForm.interface";

import styles from './feedbackForm.module.css';
import {input as Input} from "@/components/input/input";
import {textarea as Textarea} from "@/components/textarea/textarea";
import {Rating} from "@/components/rating/rating";
import {ButtonIcon} from "@/components/buttonIcon/buttonIcon";

export const FeedbackForm = (props: FeedbackFormProps) => {
    const { className, isOpened } = props;
    const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IFeedbackForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IFeedbackForm) => {
        try {
            console.log(formData)

            // const { data } = await axios.post<IFeedbackSentResponse>(API.review.createDemo, { ...formData, productId });
            const data = { message: 'Success'};
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.feedbackForm, className)}>
                <Input
                    {...register('name', { required: { value: true, message: 'Please, fill the name' } })}
                    placeholder='Name'
                    error={errors.name}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={!!errors.name}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Fill the title' } })}
                    placeholder='Title'
                    className={styles.title}
                    error={errors.title}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={!!errors.title}
                />
                <div className={styles.rating}>
                    <span>Rating:</span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{ required: { value: true, message: 'Select the rating' } }}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', { required: { value: true, message: 'Fill the text' } })}
                    placeholder='Feedback text'
                    className={styles.description}
                    error={errors.description}
                    tabIndex={isOpened ? 0 : -1}
                    aria-label='Feedback text'
                    aria-invalid={!!errors.description}
                />
                <div className={styles.submit}>
                    <ButtonIcon icon={"done"} className="text-center" appearance="white" type={'submit'} tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()} text={'Submit'}/>
                    <br/>
                    <span className={styles.info}>* We will check the feedback before publishing</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)} role="alert">
                <div className={styles.successTitle}>Your feedback was sent</div>
                <div>
                    Thanks, your feedback will be published after checking
                </div>
                <ButtonIcon icon={"done"} className={styles.close} appearance="white" onClick={() => setIsSuccess(false)} text='' />
            </div>}
            {error && <div className={cn(styles.error, styles.panel)} role="alert">
                Something was wrong
                <ButtonIcon icon={"done"} className={styles.close} appearance="white"  onClick={() => setError(undefined)} text='' />
            </div>}
        </form>
    );
}