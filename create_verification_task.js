const db = require('./server/database');

const taskDate = '2025-12-25'; // Server date is 25th Dec according to <env>
const taskTime = '00:30';

db.serialize(() => {
    db.run(
        `INSERT INTO tasks (user_id, title, task_date, scheduled_time, status) VALUES (?, ?, ?, ?, ?)`,
        [1, 'Email Verification Task', taskDate, taskTime, 'pending'],
        function(err) {
            if (err) {
                console.error('Error creating test task:', err.message);
                process.exit(1);
            }
            console.log(`Test task created with ID: ${this.lastID}`);
            process.exit(0);
        }
    );
});
