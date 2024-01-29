enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IDataSuccess {
    databaseId: number
}

interface IResponseSuccess {
    status: PaymentStatus.Success,
    data: IDataSuccess
}

interface IResponseFailed {
    status: PaymentStatus.Failed
}

type IRes = IResponseSuccess | IResponseFailed;


const getIdFromData = (res: IRes): number | undefined => {
    if(res.status === PaymentStatus.Success) {
        return res.data.databaseId;
    }
}