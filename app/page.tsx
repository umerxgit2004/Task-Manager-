import Sidebar from "./components/Sidebar"
import TaskList from "./components/TaskList"

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/6 mr-4">
        <Sidebar/> 
      </div>

      <div className="w-full">
        <h1 className="text-3xl p-4 text-center font-bold mb-6">All Tasks</h1>
        <TaskList/>
      </div>
    </div>
  )
}
export default Home