package com.turfbooking.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turfbooking.app.bean.BookingDetails;
import com.turfbooking.app.bean.SportsDetails;
import com.turfbooking.app.bean.TimeSlots;
import com.turfbooking.app.bean.TurfDetails;
import com.turfbooking.app.bean.User;
import com.turfbooking.app.repositories.BookingRepository;
import com.turfbooking.app.repositories.SportsRepository;
import com.turfbooking.app.repositories.TimeSlotRepository;
import com.turfbooking.app.repositories.TurfRepository;
import com.turfbooking.app.repositories.UserRepository;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {
	@Autowired
	private BookingRepository bookingRepo;
	@Autowired
	private SportsRepository sportsRepo;
	@Autowired
	private TurfRepository turfRepo;
	@Autowired
	private TimeSlotRepository slotRepo;
	@Autowired
	private UserRepository userRepo;

	@Override
	public BookingDetails addBooking(BookingDetails booking) {
		SportsDetails sd = sportsRepo.findById(booking.getSportId().getSport_id()).get();
		booking.setSportId(sd);
		// System.out.println(sd);
		// System.out.println();
		TurfDetails td = turfRepo.findById(booking.getTurf_id().getTurf_id()).get();
		booking.setTurf_id(td);
		// System.out.println(td);
		// System.out.println();
		User u = userRepo.findById(booking.getUser_id().getId()).get();
		booking.setUser_id(u);
		// System.out.println(u);
		TimeSlots tl = slotRepo.findById(booking.getTime_slot().getTime_id()).get();
		booking.setTime_slot(tl);

		switch (booking.getTime_slots()) {
		case "_9to_10":
				booking.getTime_slot().set_9to_10(true);
			break;
		case "_10to_11":
				booking.getTime_slot().set_10to_11(true);
			break;
		case "_11to_12":
				booking.getTime_slot().set_11to_12(true);
			break;
		case "_12to_13":
				booking.getTime_slot().set_12to_13(true);
			break;
		case "_13to_14":
				booking.getTime_slot().set_13to_14(true);
			break;
		case "_14to_15":
				booking.getTime_slot().set_14to_15(true);
			break;

		default:
			break;
		}

		return bookingRepo.save(booking);
	}

	@Override
	public List<BookingDetails> getBookings(Long usr_id) {
		//bookin
		return null;
	}

}
