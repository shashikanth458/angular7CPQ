const prefix='',endPointUrl=()=>(
    {
        'requestQuote':prefix+'/quotes/createQuote',
        'quoteList':prefix+'/quotes/quoteList',
        'orderList':prefix+'/quotes/orderList',
        'details':prefix+'/quotes/$id',
        'approveQuote':prefix+'/quotes/$quoteId/placeOrder'
        

    }
)

export default endPointUrl();