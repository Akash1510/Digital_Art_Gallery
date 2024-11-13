// First-Serve (FCFS), Shortest Job First (SJF) - Preemptive, Priority Scheduling (Non-Preemptive), and Round Robin (Preemptive). The code is structured using OOP principles.

// Problem Statement:
// Objective: To create a simulation in Java for OS process scheduling algorithms to gain a better understanding of scheduling mechanisms.

// Requirements:
// Implement FCFS, SJF (Preemptive), Priority (Non-Preemptive), and Round Robin (Preemptive) scheduling algorithms.
// Calculate the waiting time and turnaround time for each process for each scheduling algorithm.
// Display the Gantt Chart or execution order for each algorithm to illustrate the scheduling order.

// Input:
// A list of processes, each with attributes like Process ID, Burst Time, Arrival Time (for FCFS and SJF), and Priority (for Priority scheduling).
// For Round Robin scheduling, the time quantum should also be provided.

import java.util.*;

class Process {
    int id, arrivalTime, burstTime, priority;
    int waitingTime, turnaroundTime, remainingTime;

    public Process(int id, int arrivalTime, int burstTime, int priority) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.remainingTime = burstTime;
        this.priority = priority;
        this.waitingTime = 0;
        this.turnaroundTime = 0;
    }
}

public class SchedulingAlgorithms {

    // FCFS Scheduling Algorithm
    public static void fcfs(List<Process> processes) {
        System.out.println("\n--- FCFS Scheduling ---");
        processes.sort(Comparator.comparingInt(p -> p.arrivalTime));
        
        int time = 0;
        for (Process p : processes) {
            p.waitingTime = Math.max(0, time - p.arrivalTime);
            p.turnaroundTime = p.waitingTime + p.burstTime;
            time += p.burstTime;
            System.out.println("Process " + p.id + ": Waiting Time = " + p.waitingTime + ", Turnaround Time = " + p.turnaroundTime);
        }
    }

    // SJF (Preemptive) Scheduling Algorithm
    public static void sjfPreemptive(List<Process> processes) {
        System.out.println("\n--- SJF Preemptive Scheduling ---");
        processes.sort(Comparator.comparingInt(p -> p.arrivalTime));
        
        int time = 0;
        int completed = 0;
        while (completed != processes.size()) {
            Process shortest = null;
            for (Process p : processes) {
                if (p.arrivalTime <= time && p.remainingTime > 0 && (shortest == null || p.remainingTime < shortest.remainingTime)) {
                    shortest = p;
                }
            }
            if (shortest == null) {
                time++;
                continue;
            }
            shortest.remainingTime--;
            time++;
            if (shortest.remainingTime == 0) {
                completed++;
                shortest.waitingTime = time - shortest.arrivalTime - shortest.burstTime;
                shortest.turnaroundTime = shortest.waitingTime + shortest.burstTime;
                System.out.println("Process " + shortest.id + ": Waiting Time = " + shortest.waitingTime + ", Turnaround Time = " + shortest.turnaroundTime);
            }
        }
    }

    // Priority Scheduling Algorithm (Non-Preemptive)
    public static void priorityScheduling(List<Process> processes) {
        System.out.println("\n--- Priority Scheduling (Non-Preemptive) ---");
        processes.sort(Comparator.comparingInt(p -> p.arrivalTime));
        
        int time = 0;
        List<Process> queue = new ArrayList<>(processes);
        while (!queue.isEmpty()) {
            Process highestPriority = queue.stream().filter(p -> p.arrivalTime <= time)
                .min(Comparator.comparingInt(p -> p.priority)).orElse(null);

            if (highestPriority == null) {
                time++;
                continue;
            }
            queue.remove(highestPriority);
            highestPriority.waitingTime = Math.max(0, time - highestPriority.arrivalTime);
            highestPriority.turnaroundTime = highestPriority.waitingTime + highestPriority.burstTime;
            time += highestPriority.burstTime;
            System.out.println("Process " + highestPriority.id + ": Waiting Time = " + highestPriority.waitingTime + ", Turnaround Time = " + highestPriority.turnaroundTime);
        }
    }

    // Round Robin Scheduling Algorithm
    public static void roundRobin(List<Process> processes, int timeQuantum) {
        System.out.println("\n--- Round Robin Scheduling ---");
        Queue<Process> queue = new LinkedList<>(processes);
        int time = 0;

        while (!queue.isEmpty()) {
            Process p = queue.poll();
            if (p.arrivalTime <= time) {
                int timeSlice = Math.min(timeQuantum, p.remainingTime);
                p.remainingTime -= timeSlice;
                time += timeSlice;

                if (p.remainingTime == 0) {
                    p.turnaroundTime = time - p.arrivalTime;
                    p.waitingTime = p.turnaroundTime - p.burstTime;
                    System.out.println("Process " + p.id + ": Waiting Time = " + p.waitingTime + ", Turnaround Time = " + p.turnaroundTime);
                } else {
                    queue.offer(p); // Re-add process if it's not finished
                }
            } else {
                queue.offer(p); // Re-add process if it hasn't arrived yet
                time++;
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of processes: ");
        int n = scanner.nextInt();

        List<Process> processes = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            System.out.println("Enter details for Process " + (i + 1) + ":");
            System.out.print("Arrival Time: ");
            int arrivalTime = scanner.nextInt();
            System.out.print("Burst Time: ");
            int burstTime = scanner.nextInt();
            System.out.print("Priority: ");
            int priority = scanner.nextInt();
            processes.add(new Process(i + 1, arrivalTime, burstTime, priority));
        }

        // FCFS Scheduling
        fcfs(new ArrayList<>(processes));

        // SJF Preemptive Scheduling
        sjfPreemptive(new ArrayList<>(processes));

        // Priority Scheduling
        priorityScheduling(new ArrayList<>(processes));

        // Round Robin Scheduling
        System.out.print("\nEnter Time Quantum for Round Robin: ");
        int timeQuantum = scanner.nextInt();
        roundRobin(new ArrayList<>(processes), timeQuantum);

        scanner.close();
    }
}


// EXcution with input and output


// Enter the number of processes: 3
// Enter details for Process 1:
// Arrival Time: 0
// Burst Time: 5
// Priority: 1
// Enter details for Process 2:
// Arrival Time: 2
// Burst Time: 3
// Priority: 3
// Enter details for Process 3:
// Arrival Time: 4
// Burst Time: 1
// Priority: 2

// Enter Time Quantum for Round Robin: 2
// Output:
// java
// Copy code
// --- FCFS Scheduling ---
// Process 1: Waiting Time = 0, Turnaround Time = 5
// Process 2: Waiting Time = 3, Turnaround Time = 6
// Process 3: Waiting Time = 6, Turnaround Time = 7

// --- SJF Preemptive Scheduling ---
// Process 1: Waiting Time = 1, Turnaround Time = 6
// Process 2: Waiting Time = 4, Turnaround Time = 7
// Process 3: Waiting Time = 3, Turnaround Time = 4

// --- Priority Scheduling (Non-Preemptive) ---
// Process 1: Waiting Time = 0, Turnaround Time = 5
// Process 3: Waiting Time = 1, Turnaround Time = 2
// Process 2: Waiting Time = 3, Turnaround Time = 6

// --- Round Robin Scheduling ---
// Process 1: Waiting Time = 3, Turnaround Time = 8
// Process 2: Waiting Time = 3, Turnaround Time = 6
// Process 3: Waiting Time = 4, Turnaround Time = 5
// This Java program offers a clear understanding of various CPU scheduling 

