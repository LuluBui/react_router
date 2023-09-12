import { Link, useParams } from 'react-router-dom';

function Users({users}) {
    return(
        <div>
        <h1>Users</h1>
        <ul>
        {users.map((user) => {
          return( 
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                {user.name}
                </Link>
            </li>
          
          );
        })}
        </ul>
      </div>
    );
  }

function User({users}){
    const param = useParams();
    const id = param.id*1;
    const selectedUser = users.find(i => i.id === id);
    if(!selectedUser)return null;
    return <div>
        <h1><Link to='/users'>{selectedUser.name}</Link></h1>
        <ul>
            <li><h2>Username</h2> {selectedUser.username}</li>
            <li><h2>Email</h2> {selectedUser.email}</li>
            <li><h2>Address</h2> <p>{selectedUser.address.street}, {selectedUser.address.suite}</p>
            <p>{selectedUser.address.city}, {selectedUser.address.zipcode}</p></li>
            <li><h2>Phone Number</h2><p>{selectedUser.phone}</p></li>
            <li><h2>Website</h2><p>{selectedUser.website}</p></li>
            <li><h2>Company</h2> <p>{selectedUser.company.name}</p>
            <p>&quot;{selectedUser.company.catchPhrase}&quot;</p></li>
        </ul>

    </div>
}
export default Users;
export { User };