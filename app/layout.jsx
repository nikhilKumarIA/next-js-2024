import '@styles/globals.css'
import React from 'react';
import Nav from '@components/nav';


export const metaData =  {
  title: "Promptopia",
  description: 'Discover & Share AI Prompts'

}

const RootLayout = ({children}) => {

    return(
        <html lang="en">
         <body>
          <div className='main'>

            <div className='gradient' />

          </div>

          <main className='app'>
            <Nav />
             {children}
          </main>
         </body>
        </html>
    )
}

export default RootLayout;