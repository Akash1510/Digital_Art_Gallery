

// pass1 

// import java.io.*;
// import java.util.*;

// class PassOne {

//     // Opcode table for machine instructions
//     private static final Map<String, String> opcodeTable = new HashMap<>();
//     static {
//         opcodeTable.put("LOAD", "01");
//         opcodeTable.put("STORE", "02");
//         opcodeTable.put("ADD", "03");
//         opcodeTable.put("SUB", "04");
//         opcodeTable.put("JMP", "05");
//         opcodeTable.put("END", "06");
//     }

//     // Symbol table to store labels and their addresses
//     private static final Map<String, Integer> symbolTable = new HashMap<>();
//     private static List<String> intermediateCode = new ArrayList<>();

//     public static void main(String[] args) {
//         try {
//             BufferedReader reader = new BufferedReader(new FileReader("input.asm"));
//             String line;
//             int locationCounter = 0; // Holds the address of the next instruction

//             while ((line = reader.readLine()) != null) {
//                 line = line.trim();
//                 if (line.isEmpty()) continue;

//                 // Handle directives and instructions
//                 if (line.contains("START") || line.contains("BYTE") || line.contains("WORD") || line.contains("RESB") || line.contains("RESW")) {
//                     // Directives can be handled here if needed
//                     if (line.contains("START")) {
//                         locationCounter = Integer.parseInt(line.split(" ")[1]); // Start address
//                     }
//                     continue;
//                 }

//                 // Handle labels and instructions
//                 String[] parts = line.split("\\s+");
//                 if (parts.length > 1 && parts[0].endsWith(":")) { // Check for label
//                     String label = parts[0].substring(0, parts[0].length() - 1);
//                     symbolTable.put(label, locationCounter);
//                     parts = Arrays.copyOfRange(parts, 1, parts.length); // Remove label
//                 }

//                 String instruction = parts[0]; // First part is the instruction
//                 String operand = parts.length > 1 ? parts[1] : ""; // Second part is the operand (if any)

//                 if (opcodeTable.containsKey(instruction)) {
//                     String opcode = opcodeTable.get(instruction);
//                     String code = opcode + " " + operand;
//                     intermediateCode.add(code);
//                     locationCounter++;
//                 }
//             }
//             reader.close();

//             // Output Pass-I results
//             System.out.println("Pass-I Intermediate Code:");
//             for (String code : intermediateCode) {
//                 System.out.println(code);
//             }

//             // Output Symbol Table
//             System.out.println("\nSymbol Table:");
//             for (Map.Entry<String, Integer> entry : symbolTable.entrySet()) {
//                 System.out.println(entry.getKey() + " = " + entry.getValue());
//             }

//             // Save intermediate code to file
//             BufferedWriter writer = new BufferedWriter(new FileWriter("intermediateCode.txt"));
//             for (String code : intermediateCode) {
//                 writer.write(code + "\n");
//             }
//             writer.close();

//         } catch (IOException e) {
//             e.printStackTrace();
//         }
//     }
// }


// pass 2

// import java.io.*;
// import java.util.*;

// class PassTwo {

//     private static final Map<String, String> opcodeTable = new HashMap<>();
//     static {
//         opcodeTable.put("LOAD", "01");
//         opcodeTable.put("STORE", "02");
//         opcodeTable.put("ADD", "03");
//         opcodeTable.put("SUB", "04");
//         opcodeTable.put("JMP", "05");
//         opcodeTable.put("END", "06");
//     }

//     private static final Map<String, Integer> symbolTable = new HashMap<>();

//     public static void main(String[] args) {
//         try {
//             // Read symbol table from Pass-I
//             BufferedReader reader = new BufferedReader(new FileReader("symbolTable.txt"));
//             String line;
//             while ((line = reader.readLine()) != null) {
//                 String[] parts = line.split(" = ");
//                 symbolTable.put(parts[0], Integer.parseInt(parts[1]));
//             }
//             reader.close();

//             // Read intermediate code from Pass-I
//             reader = new BufferedReader(new FileReader("intermediateCode.txt"));
//             List<String> objectCode = new ArrayList<>();
//             while ((line = reader.readLine()) != null) {
//                 String[] parts = line.split("\\s+");
//                 String instruction = parts[0];
//                 String operand = parts.length > 1 ? parts[1] : "";

//                 String opcode = opcodeTable.get(instruction);
//                 String operandAddress = symbolTable.containsKey(operand) ? String.valueOf(symbolTable.get(operand)) : "00";
//                 String machineCode = opcode + " " + operandAddress;
//                 objectCode.add(machineCode);
//             }
//             reader.close();

//             // Output Pass-II result (Object Code)
//             System.out.println("Pass-II Object Code:");
//             for (String code : objectCode) {
//                 System.out.println(code);
//             }

//             // Save object code to file
//             BufferedWriter writer = new BufferedWriter(new FileWriter("objectCode.txt"));
//             for (String code : objectCode) {
//                 writer.write(code + "\n");
//             }
//             writer.close();

//         } catch (IOException e) {
//             e.printStackTrace();
//         }
//     }
// }




// Excution of the code

// START 100
// LOAD A
// ADD B
// STORE C
// JMP END
// END
// Run Pass-II:

// This will read the intermediateCode.txt and symbolTable.txt files, replace labels with their addresses, and generate the final object code in objectCode.txt.
// Input File Example: input.asm
// sql
// Copy code
// START 100
// LOAD A
// ADD B
// STORE C
// JMP END
// END
// Symbol Table (symbolTable.txt generated by Pass-I)
// makefile
// Copy code
// A = 100
// B = 101
// C = 102
// END = 103

// Object Code (objectCode.txt generated by Pass-II)
// Copy code
// 01 100
// 03 101
// 02 102
// 05 103
// 06 00









