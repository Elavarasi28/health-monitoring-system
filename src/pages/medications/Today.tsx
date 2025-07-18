import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, CheckCircle, XCircle, Clock } from "lucide-react";

interface TodayProps {
  getTodayMedications: () => any[];
  handleTakeMedication: (medicationId: string, time: string) => void;
  handleSkipMedication: (medicationId: string, time: string) => void;
  handleMissedMedication: (medicationId: string, time: string) => void;
}

const Today: React.FC<TodayProps> = ({ getTodayMedications, handleTakeMedication, handleSkipMedication, handleMissedMedication }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-foreground">Today's Medications</h2>
    {/* Summary Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Pill className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Today</p>
            <p className="text-xl font-bold text-foreground">{getTodayMedications().length}</p>
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-green-100 rounded-lg">
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Taken</p>
            <p className="text-xl font-bold text-green-600">
              {getTodayMedications().filter(med => med.status === 'taken').length}
            </p>
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-red-100 rounded-lg">
            <XCircle className="w-4 h-4 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Missed</p>
            <p className="text-xl font-bold text-red-600">
              {getTodayMedications().filter(med => med.status === 'missed').length}
            </p>
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <Clock className="w-4 h-4 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-xl font-bold text-yellow-600">
              {getTodayMedications().filter(med => med.status === 'pending').length}
            </p>
          </div>
        </div>
      </Card>
    </div>
    <div className="grid gap-4">
      {getTodayMedications().map((med, index) => (
        <Card key={`${med.id}-${med.time}`} className="p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Pill className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{med.name}</h3>
                <p className="text-sm text-muted-foreground">{med.dosage} • {med.time}</p>
                <p className="text-xs text-muted-foreground">{med.instructions}</p>
              </div>
            </div>
            <div className="flex flex-row sm:flex-row gap-2 w-full sm:w-auto justify-center sm:justify-start mt-2 sm:mt-0 mx-auto">
              {med.status === 'pending' && (
                <div className="flex space-x-1">
                  <Button
                    size="sm"
                    onClick={() => handleTakeMedication(med.id, med.time)}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Take
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSkipMedication(med.id, med.time)}
                  >
                    Skip
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleMissedMedication(med.id, med.time)}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Missed
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default Today; 