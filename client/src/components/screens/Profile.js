/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Profile = () => {
  return (
    <div style={{maxWidth: "500px", margin: "0px auto"}}>
      <div style={{
				display: "flex",
				justifyContent: "space-around",
				margin: "18px 0px",
				borderBottom: "1px solid grey",
			}}>
        <div>
          <img
						style={{ width: "160px", height: "160px", borderRadius: "80px" }}
						src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"
          />
        </div>
        <div>
					<h4>Nguyen Dang Binh</h4>
					<div style={{display: 'flex', justifyContent: 'space-between', width: '108%'}}>
						<h6>40 posts</h6>
						<h6>40 followers</h6>
						<h6>40 following</h6>
					</div>
				</div>
      </div>
			<div className="gallery">
				<img
					className="item"
					src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"
				/>
				<img
					className="item"
					src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"
				/>
				<img
					className="item"
					src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"
				/>
				<img
					className="item"
					src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"
				/>
				<img
					className="item"
					src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"
				/>
				<img
					className="item"
					src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"
				/>
			</div>
    </div>
  );
};

export default Profile;
