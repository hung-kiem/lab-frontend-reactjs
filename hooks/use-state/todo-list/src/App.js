import {useState} from "react";

function App() {
    const [jobs, setJobs] = useState(() => {
        const jobs = localStorage.getItem('jobs');
        return JSON.parse(jobs) ?? [];
    });
    const [job, setJob] = useState('');

    const handleAdd = () => {
        setJobs(prev => {
            const newJobs = [...prev, {name: job}];
            localStorage.setItem('jobs', JSON.stringify(newJobs));
            return newJobs;
        });
        setJob('')
    }
    return (<div style={{paddingLeft: 32}}>
        <input value={job} onChange={(e) => setJob(e.target.value)}/>
        <button onClick={handleAdd}>Add
        </button>
        <div id="jobs">
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job.name}</li>
                ))}
            </ul>
        </div>
    </div>);
}

export default App;
