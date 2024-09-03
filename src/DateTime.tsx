import { addHours } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const maxDays = 14;

interface DateTimeSliderProps {
    selectedDate: Date | null; 
    setSelectedDate: (date: Date | null) => void; 
}

const DateTimeSlider: React.FC<DateTimeSliderProps> = ({ selectedDate, setSelectedDate }) => {
    const startTime = new Date(); // Now
    const endTime = addHours(startTime, 24 * maxDays);

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => {
                    setSelectedDate(date); // Set the date directly
                    console.log('setSelectedDate', date?.getTime()); // unix timestamp
                }}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={startTime}
                maxDate={endTime}
            />
        </div>
    );
};

export default DateTimeSlider;
