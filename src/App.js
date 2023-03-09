import { Provider } from "react-redux";
import Footder from "./component/Footder";
import Fromh from "./component/Fromh";
import Todo from "./component/Todo/Todo";
import store from "./Redux/store";


export default function App() {
    return (
        <Provider store={store}>
            <div
            class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            {/* <!-- navbar --> */}
            <div
                class="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg"
            >
                Simple Todo Application with Redux
            </div>

            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                {/* <!-- header --> */}
                 <Fromh></Fromh>
                <hr class="mt-4" />

                {/* <!-- todo list --> */}
                <Todo></Todo>
                <hr class="mt-4" />
                     
                {/* <!-- footer --> */}
                 <Footder></Footder>
            </div>
        </div>
        </Provider>
    );
}
