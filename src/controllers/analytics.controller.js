const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { analyticsService } = require('../services');

const analytics = catchAsync(async (req, res) => {
  const {
    productCount,
    ordersCount,
    newOrders,
    newOrdersCount,
    acceptedOrders,
    acceptedOrdersCount,
    shippedOrders,
    shippedOrdersCount,
    deliveredOrders,
    deliveredOrdersCount,
    cancelledOrders,
    earnings,
  } = await analyticsService.analytics(req.user.id);
  res.json({
    productCount,
    ordersCount,
    newOrders,
    newOrdersCount,
    acceptedOrders,
    acceptedOrdersCount,
    shippedOrders,
    shippedOrdersCount,
    deliveredOrders,
    deliveredOrdersCount,
    cancelledOrders,
    earnings,
  });
});

// const getVendorProductsCount = catchAsync(async (req, res) => {
//   const productsCount = await analyticsService.getVendorProductsCount(req.user.id);
//   res.json({ productsCount });
// });

// const getVendorOrdersCount = catchAsync(async (req, res) => {
//   const ordersCount = await analyticsService.getVendorOrdersCount(req.user.id);
//   res.json({ ordersCount });
// });

// const getNewVendorOrdersCount = catchAsync(async (req, res) => {
//   const newOrdersCount = await analyticsService.getNewVendorOrdersCount(req.user.id);
//   res.json({ newOrdersCount });
// });

// const getAcceptedVendorOrdersCount = catchAsync(async (req, res) => {
//   const acceptedOrdersCount = await analyticsService.getAcceptedVendorOrdersCount(req.user.id);
//   res.json({ acceptedOrdersCount });
// });

module.exports = {
  analytics,
  // getVendorProductsCount,
  // getVendorOrdersCount,
  // getNewVendorOrdersCount,
  // getAcceptedVendorOrdersCount,
};
