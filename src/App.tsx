import { RouterProvider } from 'react-router-dom';
import { router } from '@routes/router';
const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      <div>hi</div>
    </>
  )
}

export default App
