export interface Article {
  slug: string;
  project: string;
  topic: string;
  title: string;
  summary: string;
  sections: { heading: string; body: string }[];
  architectureUrl?: string;
  githubUrl: string;
}

export const articles: Article[] = [
  {
    slug: "crashing-halfway-through-a-payment",
    project: "ChainBank (in progress)",
    topic: "Payments and blockchain",
    title: "What happens if the server crashes halfway through a payment?",
    summary: "ChainBank is a banking simulator I’m building to learn how a bank’s own records differ from blockchain settlement. When money moves between two banks, the server records the payment in its database and then sends it to the blockchain. What if it crashes between those two steps?",
    sections: [
      {
        heading: "Alice sends Bob 3,000,000 xUGX",
        body: "Alice banks with Nile Demo Bank and Bob with Rwenzori Demo Bank, so the money has to settle between the two banks on a blockchain. A background worker prepares the instruction and signs it with the bank’s key. That produces a transaction that can be sent to the chain as it is. Before sending anything, the worker saves the signed transaction in the database and marks the transfer as submitted, all in one database transaction. Only after that commit does it broadcast the transaction to the chain.",
      },
      {
        heading: "The server dies before the broadcast",
        body: "Suppose the process crashes right after the commit. The chain never heard about Alice’s payment, but the database still has the exact transaction that was meant to go out. A second job checks every open transaction every two seconds. If no receipt has appeared after 15 seconds, it sends the saved transaction again. The opposite order would be worse. If the worker broadcast first and crashed before saving, the payment could settle on the chain with no record of it in the database.",
      },
      {
        heading: "Sending twice can’t move the money twice",
        body: "Resending means the same payment can reach the chain more than once. Each one carries a settlement ID derived from the transfer’s own ID. The SettlementToken contract remembers every ID it has settled and rejects a repeat. ChainBank then logs the rejection as a harmless duplicate. If the saved transaction can no longer be mined, the worker signs a fresh one for the same settlement, and the same guard still applies. One limit remains: the design assumes a single worker, so running several would need more coordination.",
      },
    ],
    architectureUrl: "https://github.com/Mozart299/chain-bank/blob/main/docs/architecture.md",
    githubUrl: "https://github.com/Mozart299/chain-bank",
  },
  {
    slug: "placing-a-second-copy",
    project: "Mini Company Brain",
    topic: "Distributed systems",
    title: "Which copy of a record will you read?",
    summary: "Mini Company Brain is a prototype that helps software teams spot gaps between what they planned and what they’re building. It gathers facts from Slack, Linear and GitHub. Suppose one fact changes and only one server saves the update. Which copy will the team see?",
    sections: [
      {
        heading: "Find the server that owns the schedule",
        body: "Mini Company Brain gives each fact a key. For our meeting, imagine the key is “team-meeting-day” and its value is “Tuesday”. The store runs the key through a hash function, a calculation that turns the same text into the same number every time. Picture that number as a mark on a clock face. The servers also have marks around the face. Starting at the key’s mark and moving clockwise, the first server you reach owns the record. A reader with the same key and the same map can find that server independently.",
      },
      {
        heading: "Put the spare copy on another machine",
        body: "Each server gets 150 marks around the ring. That spreads its share of the records across many small intervals. Suppose the next three marks after our meeting key belong to servers A, A and C. The first A gets the original. Using the second A for the backup would leave both copies on one machine, so the store skips addresses it has already seen. It reaches C and sends the second copy there. If A goes offline, a reader can still ask C for the schedule.",
      },
      {
        heading: "How Tuesday can outlast the update",
        body: "Now change the meeting to Thursday while A is briefly offline. C saves Thursday, which is enough for the store to report success. When A comes back with its old copy, a lookup asks A first and accepts Tuesday as the answer. Listing all the facts takes a different path. The store asks every available server and keeps the newest version it receives for each key. With both servers reachable, the list can say Thursday while opening the individual record still gives you Tuesday.",
      },
    ],
    architectureUrl: "https://github.com/Mozart299/mini-company-brain/blob/main/docs/architecture.md",
    githubUrl: "https://github.com/Mozart299/mini-company-brain",
  },
  {
    slug: "catching-up-with-a-running-build",
    project: "Mini Deploy",
    topic: "Developer tooling",
    title: "Catching up with a build that already started",
    summary: "Mini Deploy lets a developer paste a link to a Git repository, watch the app build and open the running app at its own web address. If you open the dashboard when the build is already on step three, how does it show you what happened in steps one and two?",
    sections: [
      {
        heading: "The first message can arrive before the viewer",
        body: "When you ask Mini Deploy to put a project online, the server gives the job an ID and starts preparing the code to run. As it works, it records lines of text describing its progress. Those lines are the build log. The browser needs the job ID before it can ask for that particular log, so the build gets a head start. Even someone who opens the dashboard immediately can arrive late enough to miss the first clue about why a build failed.",
      },
      {
        heading: "Send the history, then leave the connection open",
        body: "When a viewer connects, the server sends the lines it has saved in memory, oldest first. If the build is still running, it immediately registers that viewer for fresh lines. Both steps happen in the same turn of the server’s event loop, so a new line cannot land in the gap between replay and registration. The browser receives the updates over one open connection using server-sent events. During a quiet build step, the server sends a small heartbeat every 15 seconds to help keep that connection open.",
      },
      {
        heading: "One build can have two viewers",
        body: "Open the same build in two tabs and each gets its own connection to the same source of updates. There’s a wrinkle in the current code. Closing either tab removes all the listeners attached to that build, so the remaining tab can stop receiving lines too. Removing only the departing tab’s listener would let the other viewer keep watching. Reopening the page can recover the saved transcript, even after the build finishes, as long as the API process is still running. Restarting it clears the in-memory history.",
      },
    ],
    architectureUrl: "https://github.com/Mozart299/mini-deploy/blob/main/docs/architecture.md",
    githubUrl: "https://github.com/Mozart299/mini-deploy",
  },
  {
    slug: "splitting-a-trip-expense",
    project: "TripTrack",
    topic: "Application design",
    title: "Who owes whom after a shared taxi ride?",
    summary: "TripTrack helps people plan group trips, invite friends to activities and keep track of shared expenses. When one friend pays for a taxi and another picks up dinner, how much should each traveller get back?",
    sections: [
      {
        heading: "Amina pays UGX 60,000 for the taxi",
        body: "Amina, Ben and Grace share the ride equally, so each person’s share is UGX 20,000. Amina hands the driver the full fare. To work out what she should get back, TripTrack keeps two running totals for her. One records the UGX 60,000 she paid. The other records the UGX 20,000 worth of travel she used. Subtracting her share leaves UGX 40,000 to recover. Ben and Grace have each paid zero toward a UGX 20,000 share, so each owes that amount.",
      },
      {
        heading: "Count the people who took the ride",
        body: "A fourth traveller stayed at the hotel. Dividing the fare by everyone on the trip would quietly charge that person UGX 15,000 and undercharge every passenger. TripTrack stores a list of people for each shared activity and uses the size of that list for an equal split. For unequal expenses, such as meals ordered separately, it can use the amount recorded for each person. The payer is a separate field in both cases. If that field is empty on an older activity, TripTrack assumes the person who entered it paid.",
      },
      {
        heading: "Dinner changes what everyone owes",
        body: "Suppose Ben then pays UGX 30,000 for dinner for the same three passengers, split equally. His own meal costs UGX 10,000, so covering dinner earns him UGX 20,000 back. That exactly offsets his taxi debt. Across both expenses, Ben breaks even, Amina should receive UGX 30,000, and Grace owes UGX 30,000. The amounts add up to zero, a handy check you can do by hand. TripTrack displays each traveller’s estimated balance across the journey. Choosing who sends money to whom is a separate step.",
      },
    ],
    architectureUrl: "https://github.com/Mozart299/triptrack/blob/main/docs/architecture.md",
    githubUrl: "https://github.com/Mozart299/triptrack",
  },
];
