// Title:  Design suitable data structures and implement Pass-I and Pass-II of a two-pass macroprocessor. The output of Pass-I (MNT, MDT and intermediate code file without any macro definitions)
                                                    
// Title: Design suitable data structures and implement pass-I of a two-pass macro-processor using OOP features in Java


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Class to represent Macro Name Table (MNT) entry
class MNTEntry {
    String macroName;
    int mdtIndex;
    int alaIndex;

    public MNTEntry(String macroName, int mdtIndex, int alaIndex) {
        this.macroName = macroName;
        this.mdtIndex = mdtIndex;
        this.alaIndex = alaIndex;
    }

    @Override
    public String toString() {
        return "Macro Name: " + macroName + ", MDT Index: " + mdtIndex + ", ALA Index: " + alaIndex;
    }
}

// Class to represent Macro Definition Table (MDT)
class MDT {
    List<String> mdtEntries;

    public MDT() {
        this.mdtEntries = new ArrayList<>();
    }

    public int addEntry(String line) {
        mdtEntries.add(line);
        return mdtEntries.size() - 1;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("MDT Contents:\n");
        for (int i = 0; i < mdtEntries.size(); i++) {
            sb.append(i).append(" : ").append(mdtEntries.get(i)).append("\n");
        }
        return sb.toString();
    }
}

// Class to represent Argument List Array (ALA)
class ALA {
    Map<String, Integer> alaMap;
    List<String> alaList;

    public ALA() {
        this.alaMap = new HashMap<>();
        this.alaList = new ArrayList<>();
    }

    public int addArgument(String argument) {
        if (!alaMap.containsKey(argument)) {
            alaList.add(argument);
            alaMap.put(argument, alaList.size() - 1);
        }
        return alaMap.get(argument);
    }

    public String getArgument(int index) {
        return alaList.get(index);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("ALA Contents:\n");
        for (int i = 0; i < alaList.size(); i++) {
            sb.append(i).append(" : ").append(alaList.get(i)).append("\n");
        }
        return sb.toString();
    }
}

// Class to represent the Macro Name Table (MNT)
class MNT {
    List<MNTEntry> mntEntries;

    public MNT() {
        this.mntEntries = new ArrayList<>();
    }

    public void addEntry(String macroName, int mdtIndex, int alaIndex) {
        mntEntries.add(new MNTEntry(macroName, mdtIndex, alaIndex));
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("MNT Contents:\n");
        for (MNTEntry entry : mntEntries) {
            sb.append(entry).append("\n");
        }
        return sb.toString();
    }
}

// Class to represent Pass-I of a Two-Pass Macro Processor
public class MacroProcessorPassOne {
    private MNT mnt;
    private MDT mdt;
    private ALA ala;
    private boolean isMacroDefinition;

    public MacroProcessorPassOne() {
        this.mnt = new MNT();
        this.mdt = new MDT();
        this.ala = new ALA();
        this.isMacroDefinition = false;
    }

    public void processLine(String line) {
        String[] tokens = line.trim().split("\\s+");

        // Check if line is a macro definition start
        if (tokens[0].equalsIgnoreCase("MACRO")) {
            isMacroDefinition = true;
            return;
        }

        // Check if line is a macro definition end
        if (isMacroDefinition && tokens[0].equalsIgnoreCase("MEND")) {
            mdt.addEntry(line);
            isMacroDefinition = false;
            return;
        }

        // If a macro definition is ongoing
        if (isMacroDefinition) {
            if (mnt.mntEntries.isEmpty() || !mnt.mntEntries.get(mnt.mntEntries.size() - 1).macroName.equals(tokens[0])) {
                // Assume first token as macro name
                String macroName = tokens[0];
                int mdtIndex = mdt.addEntry(line);
                int alaIndex = ala.alaList.size();
                
                // Add macro arguments to ALA
                for (int i = 1; i < tokens.length; i++) {
                    tokens[i] = tokens[i].replace(",", "");
                    ala.addArgument(tokens[i]);
                }

                // Add to MNT
                mnt.addEntry(macroName, mdtIndex, alaIndex);
            } else {
                // Process macro body
                StringBuilder mdtEntry = new StringBuilder();
                for (String token : tokens) {
                    if (ala.alaMap.containsKey(token)) {
                        mdtEntry.append("#").append(ala.alaMap.get(token)).append(" ");
                    } else {
                        mdtEntry.append(token).append(" ");
                    }
                }
                mdt.addEntry(mdtEntry.toString().trim());
            }
        }
    }

    public void displayTables() {
        System.out.println(mnt);
        System.out.println(ala);
        System.out.println(mdt);
    }

    public static void main(String[] args) {
        MacroProcessorPassOne macroProcessor = new MacroProcessorPassOne();

        // Sample macro lines
        String[] lines = {
            "MACRO",
            "INCR &ARG1, &ARG2",
            "LDA &ARG1",
            "ADD &ARG2",
            "STA &ARG1",
            "MEND",
            "MACRO",
            "DECR &ARG1, &ARG2",
            "LDA &ARG1",
            "SUB &ARG2",
            "STA &ARG1",
            "MEND"
        };

        // Process each line as if it's read from an assembly file
        for (String line : lines) {
            macroProcessor.processLine(line);
        }

        // Display tables after processing
        macroProcessor.displayTables();
    }
}


// execution 
// javac MacroProcessorPassOne.java
// java MacroProcessorPassOne
