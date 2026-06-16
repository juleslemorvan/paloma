import { OrderForm } from '@/Components/order/order-form'
import './order.css'

export const metadata = {
  title: 'Encomenda — Paloma Spirits',
  description: 'Faites votre commande Paloma Spirits',
  robots: { index: false },
}

export default function OrderPage() {
  return <OrderForm />
}
