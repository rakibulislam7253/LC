class GlobalConstant {
    ACTIVE_STATUS = {
        Active: 0,
        Unactive: 1
    };

    AUTH_STATUS = {
        Authorized: 'A',
        Unauthotized: 'U',
        Declined: 'D'
    };

    // All days of week with shortname key
    DAYS_OF_WEEK = {
        Sat: 'Saturday',
        Sun: 'Sunday',
        Mon: 'Monday',
        Tues: 'Tuesday',
        Wed: 'Wednesday',
        Thurs: 'Thursday',
        Fri: 'Friday'
    };
}

export default new GlobalConstant();
