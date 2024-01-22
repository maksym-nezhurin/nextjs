'use client'
import { TextareaProps } from './textarea.props';
import styles from './textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const textarea = forwardRef(({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(styles.textareaWrapper, className)}>
			<textarea className={cn(styles.textarea, {
				[styles.error]: error
			})} ref={ref} {...props} />
			{error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});

textarea.displayName = 'textarea'
