import CartContext from '../../context/CartContext'

import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const getTotalCartPrice = () =>
        cartList.reduce((total, item) => total + item.price * item.quantity, 0)

      const getTotalQuantity = () =>
        cartList.reduce((total, item) => total + item.quantity, 0)

      const showEmptyView = cartList.length === 0

      const removeAllButton = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <div className="my-cart-remove-all-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    className="remove-all-button"
                    type="button"
                    onClick={removeAllButton}
                  >
                    Remove all
                  </button>
                </div>
                <CartListView />
                <div className="order-summary-container">
                  <h1 className="order-total">
                    Order Total:
                    <span className="total-sum">
                      Rs {getTotalCartPrice()}/-
                    </span>
                  </h1>
                  <p className="total-quantity">
                    {getTotalQuantity()} items in cart
                  </p>
                  <button className="order-now-button" type="button">
                    Order now
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
