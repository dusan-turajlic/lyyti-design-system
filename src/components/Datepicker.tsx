import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatepickerProps } from '@mui/lab';
import Calendar from '../icons/Calendar';
import TextField, { ColorTypes, TextFieldProps } from './TextField';

export interface DatePickerProps<TDate> extends MuiDatepickerProps<TDate> {
  color?: ColorTypes;
}

const Datepicker = ({
  color,
  showDaysOutsideCurrentMonth = true,
  ...props
}: DatePickerProps<Date>): JSX.Element => {
  return (
    <MuiDatePicker
      components={{ OpenPickerIcon: (props) => Calendar({ fontSize: 'small', ...props }) }}
      PaperProps={{
        sx: {
          '& .MuiPickersDay-today': {
            bgcolor: '#fff',
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:focus': {
              bgcolor: 'common.white',
            },
          },
          '& .MuiPickersDay-root': {
            fontSize: '1rem',
            '&:hover': {
              bgcolor: 'primaryStates.selected',
              color: 'primary.main',
            },
          },
          '& .MuiPickersDay-root:not(.Mui-selected)': {
            borderColor: 'primary.main',
          },
          '& .PrivatePickersSlideTransition-root': {
            minHeight: '244px',
          },
          '& .MuiOutlinedInput-root:hover': {
            borderColor: 'common.white',
          },
          '& .PrivatePickersYear-yearButton:hover': {
            bgcolor: 'primaryStates.selected',
          },
          '& .MuiIconButton-root:hover': {
            bgcolor: 'primaryStates.selected',
          },
        },
      }}
      showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
      {...props}
      renderInput={(params) => {
        return <TextField {...(params as TextFieldProps)} color={color} />;
      }}
    />
  );
};

export default Datepicker;
