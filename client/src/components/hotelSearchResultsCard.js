import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit';
import '../styles/hotelSearchResultsCard.css';
import defaultHotelImsg from "../images/hotelSearchResult.jpg";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Context/AuthContext';  // Import the useAuth hook

export default function HotelCard({ name, location, rating, priceStandard, priceDeluxe, roomType, availability, ratingCount }) {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();  // Use the useAuth hook to check auth status

    function handleBookings() {
        const hotelDetails = {
            hotelName: name,
            location: location,
            roomType: roomType,
            price: roomType === 'standard' ? priceStandard : priceDeluxe,
            availability: availability
        };

        if (isAuthenticated) {
            // If the user is logged in, redirect to the reservation page with hotel details
            navigate("/hotels/reservation", { state: hotelDetails });
        } else {
            // If the user is not logged in, redirect to login, passing a state to redirect after login
            navigate("/login", { state: { redirectTo: "/hotels/reservation", hotelDetails } });
        }
    }

    return (
        <MDBCard className="hotel-card-search-results">
            <MDBCardImage src={defaultHotelImsg} position="top" alt={name} className="hotel-card-img" />
            <MDBCardBody className="hotel-card-body">
                <MDBCardTitle className="hotel-card-title hotel-card-title-special-prop">{name}</MDBCardTitle>
                <MDBCardText className="hotel-card-text">
                    <span><strong>Location:</strong> {location}</span><br />
                    <span className='star-icon-container-hotel-card'>
                        <strong className='margin-right-applied-card-text'>Ratings:</strong> {rating} <IoMdStar className="hotel-star-icon" /> ({ratingCount})
                    </span><br />
                    <span><strong>Price:</strong> <strong>${roomType === 'standard' ? priceStandard : priceDeluxe}</strong> / night</span><br />
                    <span><strong>Type:</strong> {roomType}</span><br />
                    <span><strong>Rooms Available:</strong> {availability}</span>
                </MDBCardText>
                <MDBBtn className="hotel-card-book-button" onClick={handleBookings}>Book Now</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}
