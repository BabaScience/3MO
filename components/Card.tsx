import React from "react";

interface CardProps {
  title: string;
  badge?: string;
  value: string;
  percentage: number;
  description?: string;
}

const CardInfo = {
  title: "Audience",
  badge: "New",
  value: "1,818",
  percentage: -0.02,
  description: "vs last month",
};

function Card({ title, badge, value, percentage, description }: CardProps) {
  return (
    <div className="card bg-base-100 w-96 border-[1px] border-l-gray-50" data-theme="light">
      <div className="card-body p-4">
        <h2 className="card-title mb-2 text-md">
          {title || "No Title"}
          {badge && <span className="badge bg-blue-50 ml-2 text-primary">{badge}</span>}
        </h2>
        <p className="text-3xl font-bold">{value || "NaN"} </p>
        <div className="card-actions justify-between items-center">
          {percentage && (
            <div className="flex items-center">
              {percentage >= 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 h-4 w-4 text-green-500 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 h-4 w-4 text-red-500 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                  />
                </svg>
              )}
              <span className={`pr-2 ${percentage >= 0 ? 'text-green-500': 'text-red-500'}`}>
                {percentage >= 0 ? `${percentage}%` : `${percentage}%`}
              </span>
              <span>{description}</span>
            </div>
          )}
          {!percentage && <div></div>}
          <div className="rounded-full bg-blue-50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
