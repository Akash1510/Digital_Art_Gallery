
// Title : Page Replacement code For the LRU and FIFO

import java.util.*;

public class PageReplacement {
    private List<Integer> pages;
    private int frameCount;

    public PageReplacement(List<Integer> pages, int frameCount) {
        this.pages = pages;
        this.frameCount = frameCount;
    }

    public int fifo() {
        Queue<Integer> frame = new LinkedList<>();
        int pageFaults = 0;

        for (int page : pages) {
            if (!frame.contains(page)) {
                if (frame.size() == frameCount) {
                    frame.poll(); // Remove the first-in page
                }
                frame.add(page); // Add the new page
                pageFaults++;
            }
            System.out.println("Page: " + page + " - Frame: " + frame);
        }
        System.out.println("FIFO Total Page Faults: " + pageFaults);
        return pageFaults;
    }

    public int lru() {
        List<Integer> frame = new ArrayList<>();
        int pageFaults = 0;

        for (int i = 0; i < pages.size(); i++) {
            int page = pages.get(i);

            if (!frame.contains(page)) {
                if (frame.size() == frameCount) {
                    // Find LRU page to replace
                    int lruIndex = 0;
                    for (int j = 1; j < frame.size(); j++) {
                        if (pages.subList(0, i).lastIndexOf(frame.get(j)) < pages.subList(0, i).lastIndexOf(frame.get(lruIndex))) {
                            lruIndex = j;
                        }
                    }
                    frame.remove(lruIndex);
                }
                frame.add(page);
                pageFaults++;
            }
            System.out.println("Page: " + page + " - Frame: " + frame);
        }
        System.out.println("LRU Total Page Faults: " + pageFaults);
        return pageFaults;
    }

    public int optimal() {
        List<Integer> frame = new ArrayList<>();
        int pageFaults = 0;

        for (int i = 0; i < pages.size(); i++) {
            int page = pages.get(i);

            if (!frame.contains(page)) {
                if (frame.size() == frameCount) {
                    // Find optimal page to replace
                    int farthestIndex = -1, indexToReplace = -1;

                    for (int j = 0; j < frame.size(); j++) {
                        int nextIndex = pages.subList(i + 1, pages.size()).indexOf(frame.get(j));
                        if (nextIndex == -1) {
                            indexToReplace = j;
                            break;
                        } else if (nextIndex > farthestIndex) {
                            farthestIndex = nextIndex;
                            indexToReplace = j;
                        }
                    }
                    frame.remove(indexToReplace);
                }
                frame.add(page);
                pageFaults++;
            }
            System.out.println("Page: " + page + " - Frame: " + frame);
        }
        System.out.println("Optimal Total Page Faults: " + pageFaults);
        return pageFaults;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter page reference string (space-separated): ");
        String[] pageStrings = scanner.nextLine().split(" ");
        List<Integer> pages = new ArrayList<>();
        for (String page : pageStrings) {
            pages.add(Integer.parseInt(page));
        }

        System.out.print("Enter the number of frames: ");
        int frameCount = scanner.nextInt();

        PageReplacement pr = new PageReplacement(pages, frameCount);

        System.out.println("\n--- FIFO Page Replacement ---");
        pr.fifo();

        System.out.println("\n--- LRU Page Replacement ---");
        pr.lru();

        System.out.println("\n--- Optimal Page Replacement ---");
        pr.optimal();

        scanner.close();
    }
}


// for input
// Enter page reference string (space-separated): 7 0 1 2 0 3 0 4 2 3 0 3 2
// Enter the number of frames: 3

// output

// --- FIFO Page Replacement ---
// Page: 7 - Frame: [7]
// Page: 0 - Frame: [7, 0]
// Page: 1 - Frame: [7, 0, 1]
// Page: 2 - Frame: [0, 1, 2]
// ...
// FIFO Total Page Faults: 9

// --- LRU Page Replacement ---
// Page: 7 - Frame: [7]
// Page: 0 - Frame: [7, 0]
// Page: 1 - Frame: [7, 0, 1]
// Page: 2 - Frame: [0, 1, 2]
// ...
// LRU Total Page Faults: 8

// --- Optimal Page Replacement ---
// Page: 7 - Frame: [7]
// Page: 0 - Frame: [7, 0]
// Page: 1 - Frame: [7, 0, 1]
// Page: 2 - Frame: [0, 1, 2]
// ...
// Optimal Total Page Faults: 7

