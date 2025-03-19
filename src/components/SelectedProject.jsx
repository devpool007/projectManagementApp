export default function SelectedProject({project}){
    return(
        <div>
            <header>
                <div>
                    <h1>{project.title}</h1>
                    <button>Delete</button>
                </div>
                <p>Date</p>
                <p>Description</p>
            </header>
            Tasks
        </div>
    );
}