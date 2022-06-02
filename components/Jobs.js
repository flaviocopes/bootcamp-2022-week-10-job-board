import Job from 'components/Job'

const Jobs = ({ jobs }) => {
  return (
    <>
      {jobs.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </>
  )
}

export default Jobs
