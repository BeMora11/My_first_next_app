
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

const UserDetail = async ({ params }) => {
  const user = await getUser(params.id);
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body text-center">
            <img style={{borderRadius: '50%'}} className="mb-4" src={user.avatar} alt={user.email} />
            <h5>{user.id} {user.first_name} {user.last_name}</h5>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail