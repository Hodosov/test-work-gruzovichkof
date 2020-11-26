import { MyWonderfulComponent } from '../components/MyWonderfulComponent'

function Page({ data, serverMessage }) {
    return (
        <MyWonderfulComponent
            id={data.id}
            options={data.options}
            count={data.count}
            serverMessage={serverMessage}
        >
            I'm text from a component
        </MyWonderfulComponent>
    )
}

export async function getServerSideProps() {

    const serverMessage = 'Hello from SSR'
    console.log(serverMessage)
    
    const data = {
        id: 1,
        options: {},
        count: 1,
        data: {}
    }

    return {
        props: {
            data,
            serverMessage
        }
    }
}

export default Page