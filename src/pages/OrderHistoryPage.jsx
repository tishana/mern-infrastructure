import * as usersService from '../utilities/users-service'

export default function OrderHistoryPage() {

  async function handleCheckToken(evt) {
    evt.preventDefault()
    console.log((usersService.getTime()) / (1000 * 60 * 60).toFixed(1))
  }

    return (
      <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </>
    )
  }