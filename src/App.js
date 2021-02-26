import './App.css';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <main>

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand">📰 &nbsp;Reelspaper</span>
            <span className="float-right btnMenu btn btn-outline-dark btn-sm"><a style={{ textDecoration: "none", color: "inherit" }} href="https://buymeacoffee.com/rodnavarroc" target="_blank" rel="noreferrer">Support 🎉</a></span>
          </div>
        </nav>

        <div className="containerx" id="mainC">

          <Item
            title="TikTok reaches $92 million settlement over nationwide privacy lawsuit"
            subTitle="Lawsuit claims TikTok misused ‘highly sensitive’ data"
            date=" Feb 25, 2021, 2:12pm EST"
            firstBlock="TikTok has agreed to pay $92 million to settle a class action lawsuit over alleged privacy violations, which included claims that the app collected “highly sensitive personal data” to track users and target ads to them. TikTok rejected the allegations but said it didn’t want to spend time litigating the issue."
            secondBlock="“While we disagree with the assertions, rather than go through lengthy litigation, we’d like to focus our efforts on building a safe and joyful experience for the TikTok community,” a TikTok spokesperson wrote in a statement sent to The Verge."
          />

          <Item
            title="Xbox Live is down with users unable to sign in"
            subTitle="Xbox Live sign-in is down worldwide"
            date=" Feb 25, 2021, 3:18pm EST"
            firstBlock="Microsoft’s Xbox Live service is down, preventing users from signing in to the service. The Xbox Live problems started at around 3:15PM ET today, and Microsoft has confirmed it’s investigating the outage. “We are aware that users may not be able to sign-in to Xbox Live at this time,” says Xbox support. “Our teams are currently investigating to fix this issue.”"
            secondBlock="If you’re not already signed in to your Xbox, the sign-in process will fail with an error, preventing access to certain services like Xbox Party chat. Some apps may also fail to launch without the core Xbox Live services being online, and a number of games will also not launch correctly."
          />

          <Item
            title="Final Fantasy VII Ever Crisis compiles the entire FFVII timeline into one mobile game"
            subTitle="Coming in 2022 for iOS and Android"
            date="Feb 25, 2021, 6:23pm EST"
            firstBlock="Square Enix announced two mobile games set in the Final Fantasy VII universe today. One is a battle royale game aiming for a 2021 release, and the other is Final Fantasy VII Ever Crisis, a compilation of all the games and stories set in the Final Fantasy VII universe (Final Fantasy VII, Advent Children, Before Crisis, Crisis Core, and Dirge of Cerberus). The latter is slated to launch sometime in 2022 on Android and iOS. "
          />

          <Item
            title="AT&T spins out DirecTV as a $16B company, a quarter of what it paid in 2015"
            subTitle="Existing deals like NFL Sunday Ticket will carry over to the new company"
            date="Feb 25, 2021, 5:33pm EST "
            firstBlock="AT&T today announced plans to spin out its various video businesses — DirecTV, AT&T TV, and U-Verse — into a new company that it will jointly control with TPG Capital. The deal sees AT&T holding on to a 70 percent stake in the company, with TPG getting the other 30. “The transaction to separate AT&T’s US video business into New DirecTV implies an enterprise value for the new company of $16.25 billion.” "
            secondBlock="AT&T paid a total of $67 billion to buy DirecTV: it landed the satellite provider for $48.5 billion in 2014, and the rest was debt that AT&T took on."
          />

          <Item
            title="Twitch, owned by Amazon, pulls Amazon’s anti-union ads"
            subTitle="Twitch says the ads from its parent company ‘should never have been allowed to run’"
            date=" Feb 25, 2021, 2:46pm EST"
            firstBlock="Twitch is removing the anti-union ads that its parent company, Amazon, was running on the platform. The ads showed Amazon employees talking about why they want to vote no on unionization and directed viewers to Amazon’s “DoItWithoutDues” website. A Twitch spokesperson said the ads “should never have been allowed to run on [the] service,” as they violate its political advertising policies. "
            secondBlock="Twitch also says that it is “evaluating [its] review processes to ensure that similar content does not run in the future.”"
          />

        </div>

      </main>

      <footer className="fixed-bottom bg-dark text-light p-1"><center>Made with 💖 by @rodnavarroc</center></footer>
    </div>
  );
}

export default App;
