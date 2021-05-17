import React from 'react';
import './PeopleProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const PeopleProfile = (props) => {
    const { name, image } = props.profile;
    const handleAddBtn = props.handleAddBtn;
    return (
        <div>
            <div className="card-add-friend">
                <div className="card-img">
                    <img className="image" src={image} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4>{name}</h4>
                        <p style={{color:"#65676B"}}>4 mutual friend</p>
                    </div>
                    <div className="btn">
                        <button onClick={() => handleAddBtn(props.profile)} className="button-desgin"><FontAwesomeIcon className="icon" icon={faUserPlus} />Add Friend</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PeopleProfile;