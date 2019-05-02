const prefix='/quotes',endPointUrl=()=>(
    {
        'requestQuote':prefix+'/createQuote',
        'quoteList':prefix+'/quoteList',
        'orderList':prefix+'/orderList',
        'details':prefix+'/$id',
        'approveQuote':prefix+'/$quoteId/placeOrder',
        'resetData':prefix+'/refreshDBWithStatic'
        

    }
)

export default endPointUrl();