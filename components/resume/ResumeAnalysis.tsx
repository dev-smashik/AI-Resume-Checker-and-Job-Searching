'use client'
import { useState } from "react";

interface ResumeAnalysisProps {
  analysis: {
    score: number;
    overview: string;
    strengths: string[];
    improvements: string[];
    formatIssues: string[];
    contentSuggestions: string[];
  };
}

export function ResumeAnalysis({ analysis }: ResumeAnalysisProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Resume Analysis</h2>
        <div className="flex items-center">
          <span className="mr-2 font-medium">Resume Score:</span>
          <span className={`text-xl font-bold ${getScoreColor(analysis.score)}`}>
            {analysis.score}%
          </span>
        </div>
      </div>

      <div className="flex border-b">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "overview" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "strengths" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("strengths")}
        >
          Strengths
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "improvements" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("improvements")}
        >
          Improvements
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "overview" && (
          <div className="space-y-4">
            <p className="text-gray-700 whitespace-pre-line">{analysis.overview}</p>
            
            {analysis.formatIssues.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Format Issues</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {analysis.formatIssues.map((issue, index) => (
                    <li key={index} className="text-gray-700">{issue}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {analysis.contentSuggestions.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Content Suggestions</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {analysis.contentSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-gray-700">{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "strengths" && (
          <div>
            <h3 className="text-lg font-medium mb-2">Resume Strengths</h3>
            <ul className="list-disc pl-5 space-y-2">
              {analysis.strengths.map((strength, index) => (
                <li key={index} className="text-gray-700">{strength}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "improvements" && (
          <div>
            <h3 className="text-lg font-medium mb-2">Suggested Improvements</h3>
            <ul className="list-disc pl-5 space-y-2">
              {analysis.improvements.map((improvement, index) => (
                <li key={index} className="text-gray-700">{improvement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
