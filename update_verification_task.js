const db = require('./server/database');

const taskDate = '2025-12-26'; 
const taskTime = '00:50';

db.serialize(() => {
    db.run(
        `UPDATE tasks SET task_date = ?, scheduled_time = ? WHERE title = ?`,
        [taskDate, taskTime, 'Email Verification Task'],
        function(err) {
            if (err) {
                console.error('Error updating test task:', err.message);
                process.exit(1);
            }
            console.log(`Test task updated to ${taskDate} ${taskTime}`);
            process.exit(0);
        }
    );
});
