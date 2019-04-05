/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.OrderHistory';

export default defineMessages({
  orderNumber: {
    id: `${scope}.orderNumber`,
    defaultMessage: 'Order #',
  },
  client: {
    id: `${scope}.client`,
    defaultMessage: 'Client',
  },
  clientName: {
    id: `${scope}.clientName`,
    defaultMessage: 'Order Date',
  },
  clientEmail: {
    id: `${scope}.clientEmail`,
    defaultMessage: 'Client Email',
  },
  DVM_ID: {
    id: `${scope}.DVM_ID`,
    defaultMessage: 'DVM ID',
  },
  invoiceNumber: {
    id: `${scope}.invoiceNumber`,
    defaultMessage: 'Invoice #',
  },
  orderID: {
    id: `${scope}.orderID`,
    defaultMessage: 'Order ID',
  },
  shipOrderNumber: {
    id: `${scope}.shipOrderNumber`,
    defaultMessage: 'Ship Order #',
  },
  SKU: {
    id: `${scope}.SKU`,
    defaultMessage: 'SKU',
  },
  toteNumber: {
    id: `${scope}.toteNumber`,
    defaultMessage: 'Tote #',
  },
  trackingNumber: {
    id: `${scope}.trackingNumber`,
    defaultMessage: 'Tracking #',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
  queues: {
    id: `${scope}.queues`,
    defaultMessage: 'Queues',
  },
  views: {
    id: `${scope}.views`,
    defaultMessage: 'Views',
  },
  orderDate: {
    id: `${scope}.orderDate`,
    defaultMessage: 'Order Date',
  },
  platform: {
    id: `${scope}.platform`,
    defaultMessage: 'Platform',
  },
  facility: {
    id: `${scope}.facility`,
    defaultMessage: 'Facility',
  },
  shipMethod: {
    id: `${scope}.shipMethod`,
    defaultMessage: 'Ship Method',
  },
  orderStatus: {
    id: `${scope}.orderStatus`,
    defaultMessage: 'Order Status',
  },
  orderTotal: {
    id: `${scope}.orderTotal`,
    defaultMessage: 'Order Total',
  },
});
