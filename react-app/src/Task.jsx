export default function Task(props){
  if(!props.taskName){
    props.taskName = 'Loading';
  }
  return(
    <>
      <div className="card">
        <div className="card-body">
          <div className= "d-flex justify-content-between">
          <div className= "form-check">
              <input className="form-check-input"
              checked ={'checked' ? props.isCompleted: ''}
              type="checkbox" />
          </div>
              
              <h6> {props. id + ' ' +props.taskName}  </h6>
              {/* <p>{props.date}</p> */}
              <button type="button" class="btn btn-primary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div>
          </div>
        </div>
      
    </>
  )
}