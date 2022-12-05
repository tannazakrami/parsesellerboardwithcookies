const unpackingData = async (data) =>{
    let object = data[0]
    console.log(object)
    let expenses, totalProductCount, expensesTotal, expensesArray, costOfShipping,
    unitsPromo, shippingFBA, shippingFBM, shippingPrime, shippingPick, shippingPack,
    investments, cash, fbAdsCosts, gaAdsCosts, ttAdsCosts, showExpansesExclamation,
    showPpcExclamation, showProductCostExclamation, sales, orders, salesOrganic,
    salesPpc, units, unitsOrganic, unitsPpc, promotionValue, sponsoredAds,
    videoAds, sponsoredDisplay, hsa, advertising, realACOS, advertisingDetails, 
    sponsoredProducts, sponsoredBrandVideo, sponsoredDisplayDescription, 
    sponsoredBrands, giftWrap, shippingCost, shippingCostList, refundCost, 
    principal, refundedAmount, refundComission, refundProductCosts, commission,
    restockingFee, refundCostsTotal, refunds, grossProfit, netProfit, 
    estimatedPayOut, amazonFeesTotal, fbaPerUnitFulfilmentFee, referralFee, 
    fbaRemovalFee, subscription, fbaDisposalFee, inboundTransportaion, 
    compensatedClawback, longTermStorageFee, fbaStorageFee, fbaFeeMCF, 
    miscAdjustment, reversalReimbursement, freeReplacementRefundItems, 
    warehouseDamage, warehousLost, productCosts, multiChannelCosts, 
    costOfMissingReturns, vatCosts, margin, salesCosts, missingFromInboundCosts,
    writeOffCosts, refundsAmountPercent, sellableQuota, sellableReturns, roi, 
    shippingHB, goodwil, shippingHoldBack,shippingCharge, 
    fbaCustomerReturnPerUnitFee, liquidationsBrokerageFee, liquidationsRevenue, 
    csErrorItems, liquidationsRevenueAdjustment, refundedReferralFee, refundedShipping,
    valueOfReturnedItems

    expenses = object.Expenses || null
    totalProductCount = object.TotalProductCount || null
    expensesTotal = object.expensesTotal || null
    expensesArray = null
    costOfShipping = object.CostOfShipping || null
    unitsPromo = object.UnitsPromo || null
    shippingFBA = object.Shipping_FBA || null
    shippingFBM = object.Shipping_FBM || null
    shippingPrime = object.Shipping_Prime || null
    shippingPick = object.ShippingPick || null
    shippingPack = object.ShippingPack || null
    investments = object.Investments || null
    cash = object.Cash || null
    fbAdsCosts =  object.fb_ads_costs || null
    gaAdsCosts = object.ga_ads_costs || null
    ttAdsCosts = object.tiktok_ads_costs || null
    showExpansesExclamation = object.showExpansesExclamation || null
    showPpcExclamation = object.showPpcExclamation || null
    showProductCostExclamation = object.showProductCostExclamation || null
    sales = object.sales || null
    orders = object.orders || null
    salesOrganic = object.salesOrganic || null
    salesPpc = object.salesPpc || null
    units = object.units || null
    unitsOrganic = object.unitsOrganic || null
    unitsPpc = object.unitsPpc || null
    promotionValue = object.promotionValue || null
    sponsoredAds = object.sponsoredAds || null
    videoAds = object.videoAds || null
    sponsoredDisplay = object.sponsoredDisplay || null
    hsa = object.hsa || null
    advertising = object.advertising || null
    realACOS = object.realACOS || null
    advertisingDetails = object.advertisingDetails || null
    if(advertisingDetails.length){
        for(let element of advertisingDetails){
            switch(element.name){
                case 'Sponsored Products':
                    sponsoredProducts = element.amount || null
                    break
                case 'Sponsored Brands Video':
                    sponsoredBrandVideo = element.amount || null
                    break
                case 'Sponsored Display':
                    sponsoredDisplayDescription = element.amount || null
                    break
                case 'Sponsored Brands':
                    sponsoredBrands = element.amount || null
                    break
                default: 
                    console.log(`Не найдено колонки ${element.name}`)
            }
        }
    }
    else{
        sponsoredProducts = null
        sponsoredBrandVideo = null
        sponsoredDisplayDescription = null
        sponsoredBrands = null
    }
    giftWrap = object.giftWrap || null
    shippingCost = object.shippingCost || null
    shippingCostList = null
    refundCost = object.refundCosts || null
    if(refundCost.length){
        for(let element of refundCost){
            switch(element.key){
                case 'Principal':
                    principal = element.amount || null
                    break
                case 'RefundCommission':
                    refundComission = element.amount || null
                    break
                case 'RefundedAmount': 
                    refundedAmount = element.amount || null
                    break
                case 'ProductCosts':
                    refundProductCosts = element.amount || null
                    break
                case 'Commission':
                    commission = element.amount || null
                    break
                case 'ShippingCharge':
                    shippingCharge = element.amount || null
                    break
                case 'ShippingHB':
                    shippingHB = element.amount || null
                    break
                case 'Goodwill':
                    goodwil = element.amount || null
                    break
                case 'FBACustomerReturnPerUnitFee':
                    fbaCustomerReturnPerUnitFee = element.amount || null
                    break
                case 'RestockingFee':
                    restockingFee = element.amount || null
                    break
                case 'Refunded referral fee':
                    refundedReferralFee = element.amount || null
                    break
                case 'Refunded shipping':
                    refundedShipping = element.amount || null
                    break
                case 'Value of returned items':
                    valueOfReturnedItems = element.amount || null
                    break
                default:
                    console.log(`Не найдено в refundCosts ${element.key}`)
            }
        }
    }
    else{
        principal = null
        refundComission = null
        refundedAmount = null
        refundProductCosts = null
        commission = null
        shippingCharge = null
        shippingHB = null
        goodwil = null
        fbaCustomerReturnPerUnitFee = null
        restockingFee = null
        refundedReferralFee = null
        refundedShipping = null
        valueOfReturnedItems = null
    }
    refundCostsTotal = object.refundCostsTotal || null
    refunds = object.refunds || null
    grossProfit = object.grossProfit || null
    netProfit = object.netProfit || null
    estimatedPayOut = object.estimatedPayOut || null
    amazonFeesTotal = object.amazonFeesTotal || null
    amazonFees = object.amazonFees || null
    if(amazonFees.length){
        for(let element of amazonFees){
            switch(element.name){
                case 'FBA per unit fulfilment fee':
                    fbaPerUnitFulfilmentFee = element.amount || null
                    break
                case 'Referral fee':
                    referralFee = element.amount || null
                    break
                case 'Shipping hold-back':
                    shippingHoldBack = element.amount || null
                    break
                case 'FBA storage fee':
                    fbaStorageFee = element.amount || null
                    break
                case 'FBA disposal fee':
                    fbaDisposalFee = element.amount || null
                    break
                case 'Reversal reimbursement':
                    reversalReimbursement = element.amount || null
                    break
                case 'Free replacement refund items':
                    freeReplacementRefundItems = element.amount || null
                    break
                case 'Compensated clawback':
                    compensatedClawback = element.amount || null
                    break
                case 'Warehouse damage':
                    warehouseDamage = element.amount || null
                    break
                case 'Warehouse lost':
                    warehousLost = element.amount || null
                    break
                case 'Long term storage fee':
                    longTermStorageFee = element.amount || null
                    break
                case 'FBA removal fee':
                    fbaRemovalFee = element.amount || null
                    break
                case 'Subscription':
                    subscription = element.amount || null
                    break
                case 'Inbound transportation':
                    inboundTransportaion = element.amount || null
                    break
                case 'FBA fee (MCF)':
                    fbaFeeMCF = element.amount || null
                    break
                case 'Misc adjustment':
                    miscAdjustment = element.amount || null
                case 'Liquidations brokerage fee':
                    liquidationsBrokerageFee = element.amount || null
                    break
                case 'Liquidations revenue':
                    liquidationsRevenue = element.amount || null
                    break
                case 'CS error items':
                    csErrorItems = element.amount || null
                    break
                case 'LiquidationsRevenueAdjustment':
                    liquidationsRevenueAdjustment = element.amount || null
                    break
                default:
                    console.log(`Не найдено в amazonFees ${element.name}`)
            }
        }
    }
    else{
        fbaPerUnitFulfilmentFee = null
        referralFee = null
        shippingHoldBack = null
        fbaStorageFee = null
        fbaDisposalFee = null
        reversalReimbursement = null
        freeReplacementRefundItems = null
        compensatedClawback = null
        warehouseDamage = null
        warehousLost = null
        longTermStorageFee = null
        fbaRemovalFee = null
        subscription = null
        inboundTransportaion = null
        fbaFeeMCF = null
        miscAdjustment = null
        warehousLost = null
        liquidationsBrokerageFee = null
        liquidationsRevenue = null
        csErrorItems = null
        liquidationsRevenueAdjustment = null
    }
    productCosts = object.productCosts || null
    multiChannelCosts = object.multiChannelCosts || null
    costOfMissingReturns = object.costOfMissingReturns || null
    vatCosts = object.vatCosts || null
    margin = object.margin || null
    salesCosts = object.salesCosts || null
    missingFromInboundCosts = object.missingFromInboundCosts || null
    writeOffCosts = object.writeOffCosts || null
    refundsAmountPercent = object.refundsAmountPercent || null
    sellableQuota = object.sellableQuota || null
    sellableReturns = object.SellableReturns || null
    roi = object.roi
    return [expenses, totalProductCount, expensesTotal, expensesArray, costOfShipping, 
            unitsPromo, shippingFBA, shippingFBM, shippingPrime, shippingPick, shippingPack,
            investments, cash, fbAdsCosts, gaAdsCosts, ttAdsCosts, showExpansesExclamation,
            showPpcExclamation, showProductCostExclamation, sales, orders, salesOrganic,
            salesPpc, units, unitsOrganic, unitsPpc, promotionValue, sponsoredAds, videoAds,
            sponsoredDisplay, hsa, advertising, realACOS, sponsoredProducts, sponsoredBrandVideo,
            sponsoredDisplayDescription, sponsoredBrands, giftWrap, shippingCost, shippingCostList, 
            principal, refundComission, refundedAmount, refundProductCosts, commission, shippingCharge, 
            shippingHB, goodwil, fbaCustomerReturnPerUnitFee, restockingFee, refundedReferralFee, 
            refundedShipping, valueOfReturnedItems, refundCostsTotal, refunds, grossProfit,
            netProfit, estimatedPayOut, amazonFeesTotal, fbaPerUnitFulfilmentFee, referralFee, 
            shippingHoldBack, fbaStorageFee, fbaDisposalFee, reversalReimbursement, 
            freeReplacementRefundItems, compensatedClawback, warehouseDamage, warehousLost,
            liquidationsBrokerageFee, liquidationsRevenue, csErrorItems, liquidationsRevenueAdjustment,
            longTermStorageFee, fbaRemovalFee, subscription, inboundTransportaion, fbaFeeMCF,
            miscAdjustment, productCosts, multiChannelCosts, costOfMissingReturns, vatCosts, 
            margin, salesCosts, missingFromInboundCosts, writeOffCosts, refundsAmountPercent,
            sellableQuota, sellableReturns, roi]
}

module.exports = unpackingData