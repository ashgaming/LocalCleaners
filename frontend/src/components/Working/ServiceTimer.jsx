import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { formatTime } from './utils/timeUtilis'; 

export default function ServiceTimer({startTimer}) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(startTimer);
  const timeLimit = 3 * 60 * 60; // 3 hours in seconds

  useEffect(() => {
    let interval ;
    if (startTimer && timeElapsed < timeLimit) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTimer, timeElapsed]);

  const timeRemaining = timeLimit - timeElapsed;
  const isNearingLimit = timeRemaining < 900; // 15 minutes

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Service Timer</h2>
        <Clock className="h-6 w-6 text-blue-600" />
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold mb-2">{formatTime(timeElapsed)}</div>
        <div className="text-gray-600">Time Elapsed</div>
      </div>

      {isNearingLimit && (
        <div className="mt-4 p-3 bg-yellow-50 rounded-md flex items-center">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
          <span className="text-yellow-700">
            Warning: Approaching time limit ({formatTime(timeRemaining)} remaining)
          </span>
        </div>
      )}
    </div>
  );
}