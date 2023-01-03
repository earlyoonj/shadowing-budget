function DateInput() {
    return (
        <div className="input-field">
            {/* TODO: DatePicker 컴포넌트 추가, id  */}
            <label htmlFor="date-picker">날짜</label>
            <input id="date-picker" type="date" />
        </div>
    );
}

export default DateInput;