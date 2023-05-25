
const Error = ({error}) => {
  return (
    <div>
      if(!error) return null;
      return (
        <p style={{color: '#f31', margin: '1rem 0'}}>{error}</p>
      )
    </div>
  )
}

export default Error
