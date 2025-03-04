const Event = ()=>{
    function fun(){
        alert("Working")
    }
    return(
        <>
        <h2>Event Page</h2>
        <button onClick={fun}>click</button>
        <button onMouseDown={fun}>click</button>
        <button onMouseEnter={fun}>click</button>

        </>
    )
}
export default Event