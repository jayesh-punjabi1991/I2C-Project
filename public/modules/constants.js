/**
 * Constant Config
 * This is the constant definition that defines all application constants.
 */
define(['angular'], function(angular) {
    'use strict';
    return angular.module('app.constants', [])
                  .constant('urls',{
                    //base_url: 'https://apigatewaystage.run.aws-usw02-pr.ice.predix.io' // stage url
                    base_url: 'https://tcaapigateway.run.aws-usw02-pr.ice.predix.io' // dev url
                    //base_url: 'http://3.206.230.29:9004'
                    ,fetch_token: '/fetchToken'
                    ,get_user_details: '/tcaapigateway/getUser'
                    ,get_quotes_list:'/tcaapigateway/getQuotes'
                    ,get_quotes_list_date:'/tcaapigateway/filterData'
                    ,get_quote_details: '/tcaapigateway/getQuoteDetails'
                    ,get_mypending_actions: '/tcaapigateway/getNotification'
                    ,process_notification: '/tcaapigateway/processedNotification'
                    ,accept_quote: '/tcaapigateway/acceptQuote'
                    ,reject_quote: '/tcaapigateway/rejectQuote'
                    ,file_upload: '/tcaapigateway/blob/upload'
                    ,file_view: '/tcaapigateway/blob/download'
                    ,get_orders_list:'/tcaapigateway/getOrders'
                    ,get_orders_list_date:'/tcaapigateway/filterData'
                    ,get_order_details:'/tcaapigateway/getOrderDetails'
                    ,get_DL_for_CR:'/tcaapigateway/getcrdl'
                    ,initiate_cr:'/tcaapigateway/initiateCR'
                    ,get_Cr_details:'/tcaapigateway/getCrDetail'
                    ,get_Cr_List:'/tcaapigateway/getAllCR'
                    ,get_Cr_List_date:'/tcaapigateway/filterData'
                    ,accept_CR:'/tcaapigateway/acceptCR'
                    ,reject_CR:'/tcaapigateway/rejectCR'
                    ,approve_order:'/tcaapigateway/approve'
                    ,get_Cr_diff_details:'/tcaapigateway/order/diff'
                    ,get_invoice_list:'/tcaapigateway/invoice/getAll'
                    ,get_invoice_details:'/tcaapigateway/invoice/detail'
                    ,get_invoice_list_by_suborder:'/tcaapigateway/invoice/detail'
                    ,validate_invoice: '/tcaapigateway/verify'
                    ,download_invoice:'/tcaapigateway/dwnldInvoice'
                    ,get_disputes_list:'/tcaapigateway/getAllDisputes'
                    ,get_disputes_list_date:'/tcaapigateway/filterData'
                    ,get_dispute_details:'/tcaapigateway/dispute'
                    ,initiate_dispute:'/tcaapigateway/initiateDispute'
                    ,get_payment_list:'/tcaapigateway/getAllPayments'
                    ,get_payment_details:'/tcaapigateway/getPaymentDetails'
                    ,initiate_payment:'/tcaapigateway/initiatePayment'
                    ,get_order_audit_records:'/tcaapigateway/getAuditRecords'
                    ,get_invoice_audit_records:'/tcaapigateway/getInvoiceAuditHistory'
                  });
});
