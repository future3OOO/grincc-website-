import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function November222022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes November 22, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted - min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> nicolasflamel</li>
                    <li><UserIcon /> mo5itoo</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> mcmmike</li>
                    <li><UserIcon /> future3ooo</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem />@davidt proposed that Grin CC be paused or dissolved and funds must be returned, due to a poor payment process, and a management discussion was held.  </li>
                    <li><RhombusItem />Collect feedback& give opinions about GRINCC pause or dissolve from community via forum post & other channels and voting pushed until next meeting. </li>
                    <li><RhombusItem />Hardware wallet and python wrapper bounties should be unlocked or not, and current situation evaluated.  </li>
                    <li><RhombusItem />The proposal to add a payment management role to the Groundskeeper duties is accepted.  </li>
                    <li><RhombusItem />To do list added for better management and tracking issues.  </li>

                </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li>No voting has been held. </li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/november-08-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Grin CC should be paused until further notice and funds must be returned.   <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. Proposal to add a payment management roll to the Groundskeeper duties.  <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                    <li>3. Unlock the Python CFFI secp256k1-zkp wrapper and Ledger hardware wallet support bounties. <a href="#issue_3" className="text-primary"><DownRightArrow/>  </a> </li>

                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Grin CC should be paused until further notice and funds must be returned.</h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__Mcmmike__ : I did talk to Hendi last night he won't be able to join today.

👍 anynomous


__anynomous__ : Ok lets start with the first topic of today:

Grin CC should be paused until further notice and funds must be returned.
Slow payments/ poor payment management are a re-occurring theme and off putting for all Grin contributors who have had funding requests approved by the CC

@dtavarez Take it away.

__dtavarez__ : I'll try to summarise since I already gave my opinion
if no one assumes any responsibility of any kind, then there is no reason for the CC to exist.
It’s not just about payment delays, that’s just one of the symptoms. It has not yet been established how, for example, the Farm Project will be managed, who will be responsible for it and what the process would be. I have been asking for months even for opinions and have not received any response.
How Testnet miners’ power consumption will be covered is not defined, and how that process looks like, or how we are going to prove to the Community that these miners are used exclusively for the Testnet. Some members have not been able to take an hour to attend the meetings or have never suggested a single topic.
None of this has anything to do with how transactions are signed.
the delays are just a symptom
I find it extremely disrespectful not to honor commitments, for sure
and this is happening since the beginning
the solution is to make responsibilities and expectations clear
but that is not happening
more information here https://forum.grin.mw/t/pause-grin-community-council-we-need-your-opinion/10185
Grin
Pause GRIN Community Council - we need your opinion!


__anynomous__ : I think a part of the problem is that there actually is not clearness on commitment, apart from holding the keys and being available for signing. No one failed there commitment in that sense, but together we have to run the ship called CC, which means you see an uneven distribution of tasks and unclearness on who does what. We should up our standards a bit to include also read up on Grin now and then and to join meetings at least once a month. Taking time off is fine, but we should clearly communicate this and for how long.

__Mcmmike__ : Relying on someone being responsible is one think. But also stepping up taking responsibility is another thing. We all have our time to take these responsibilities and I think personally we did good in the past. What happened now is members  did not focus on grin much last months. Which is fine to some extent as we are 5 people and everyone can step up and take responsibility.

I have to personally decline the argument " since the beginning" this is not true, read my forum post again ..

__dtavarez__ : I suggest to:

- Pause the Grin CC until a more motivated group of people join.
- Allocate an amount of coins to cover funding for the next 12 months.
- Define a better process in the meantime.
- Return the rest of the funds to the OC.

>__Mcmmike__ : Relying on someone being responsible is one think. But also stepping up taking responsibility is another thing. We all have our time to take these responsibilities and I think personally we did good in the past. What happened now is members  did not focus on grin much last months. Which is fine to some extent as we are 5 people and everyone can step up and take responsibility.

we have always been late in making the transactions

__anynomous__ : I think the solution you are proposing does not match the problem. Yes payments are sometimes delayed, but within acceptable margins actually. No CC is not better than a CC that does not function at 100% capacity at times due to other activities of its members.
I agree on the defining a better process. Returning funds to the OC, what does that solve, are they going to use the funds better?

__dtavarez__ : I’m not trying to put the blame on anyone in particular, I think the burden of making this work falls on everyone, including me, that’s why I try to do everything I can.

__Mcmmike__ : I want a vote please: 

Give the community some time for the next meeting if we should pause or proceed. Find some possible candidates to replace some members. 
Create forum post with legitimately people who want to join the CC, etc.

This was to short notice for the whole community to react and tell us their opinion.

💯 anynomous, cekickafa  👍 

Can we please share the payment delays since start to have it in the meeting ?

__dtavarez__ : Time and time again I find myself apologising to the contributors over and over again since the CC started functioning. I will not do it again while we ignore the problem and pretend that not meeting commitments on time is not disrespectful to say the least. It won't happen again, I know disrespectful and there is no excuse for that.

__cekickafa__ : https://github.com/cekickafa/finance/blob/main/funding%20payment%20summary.md

__anynomous__ : I agree, I did not hear much complains about the CC. There we some, but nothing to warrant something radical in my opinion.
We should change our habits/patterns and possible some members, but thats all IMO.
I know you are high on respect, but this is not about respect as much as unclearness in expectations and protocols.

__dtavarez__ :

>__Mcmmike__ : Can we please share the payment delays since start to have it in the meeting ?

I am not going to that path, you know there are delays, we all know it. 

>__cekickafa__ : https://github.com/cekickafa/finance/blob/main/funding%20payment%20summary.md

there are missing delays here.

__cekickafa__ : I believe that payment management may require some minor adjustments, but I believe that Grinncc-Pause is an overreaction to the situation.

__anynomous__ : Yes, but the question is if those delays are to much. I find them acceptable although I would like to bring them down to 14 days.

__Mcmmike__ : 

>__dtavarez__ : Time and time again I find myself apologising to the contributors over and over again since the CC started functioning. I will not do it again while we ignore the problem and pretend that not meeting commitments on time is not disrespectful to say the least. It won't happen again, I know disrespectful and there is no excuse for that.

This is understandable, I can take on the communication if you like in the future so you don't have to. Basically I am doing this already as the candidates are writing me DMs already.

__dtavarez__ : 

>__cekickafa__ : https://github.com/cekickafa/finance/blob/main/funding%20payment%20summary.md

and also missing payments.

__future3000__ : 

>__dtavarez__ : if no one assumes any responsibility of any kind, then there is no reason for the CC to exist.

People have assumed responsibility, you're assuming responsibility right now and have assumed majority of the CC responsibility over the past 6 months. Prior to that @mcmmike & @anynomous had much larger roles. 

@anynomous Summed it up pretty well here under The main problem with decentralization and voluntary council members

 https://forum.grin.mw/t/pause-grin-community-council-we-need-your-opinion/10185/5?u=

Admittedly I haven't assumed any real responsibility aside from signing. However, I acknowledged this back in April and wanted to step down and for someone else to fulfill my role as I wouldn't have any time on my hands until later in the year( Like now).  But was convinced to stay on even just for the purpose of being a trusted signer.  We now have Mike feeling bad and talking about taking a break from CC because he hasn't been as active and feels like he's blocking progress. Which is ridiculous.

You can talk all you want about responsibility but Dissolving the CC and giving back money to OC, would not be in the best interests of the Grin community/ Grin project, because it’s cutting off a potential funding source.  If someone from the community comes up with a cool concept, that could help grow Grin, but it doesn’t have anything to do with the Core protocol, then it’s going to be much harder to the convince the OC to fund it, than it would be the CC.  It’s even the CC who are funding CoinSwap, because it didn’t seem OC were motivated enough to pursue it.

https://forum.grin.mw/t/pause-grin-community-council-we-need-your-opinion/10185/5?u=

💯 defistaker

__anynomous__ : Additionally I think we should reflect on what cause other issues, e.g. the mining farm. From the beginning I and others warned this could cause problems because we are simply taking on to much workload as CC. In this case it all fell on you @dtavarez, which was burdon. So we should learn to not take on things that are to much burden. Keep things simple and clearly separate what we want as CC, what we do for the community, and what we do on our own volatility.

__dtavarez__ : I think it is more honest to plead ignorance than to pretend that there are no delays.

>__future3000__ : People have assumed responsibility, you're assuming responsibility right now and have assumed majority of the CC responsibility over the past 6 months. Prior to that @mcmmike & @anynomous had much larger roles. 

Exactly
and that is easy to say because meanwhile I am the one taking most of the duties
thank you

__future3000__ : 

>__cekickafa__ : https://github.com/cekickafa/finance/blob/main/funding%20payment%20summary.md

& ~11 days since the CC priority group was setup.  I think we can get this down to 1-2.

__dtavarez__ : also delays or not, there are way more things
I listed all of them and somehow we keep focusing on the delays.

__anynomous__ : Exactly, so we should decrease our duties were we can. The farm, we should make it as hands off as possible. I actually already agreed in the past that we should the guys from there handle most for some modest pay.
I am not denying that there are things we should improve @dtavarez. Basically it is an accumulation of many small things and an accumulation of you jumping in many gaps on tasks that should be done.
But again, we can manage that by better protocols, habits, clearly stating what we expect of members, and reducing unnecessary tasks.
I mean it is ridiculous to stop the whole CC (leading to nothing being done), being cause by taking on to many tasks. We should just regroup and reformulate what we should and should not do.

__dtavarez__ : quite arrogant to say that the dissolution of the CC solves nothing, when no one takes responsibility for anything and I bear the majority.

__Mcmmike__ : As I think we still need the vote on my request, I would add the following:

Until next meeting the CC members write down on how they can improve and take back on responsibilities publicly . Then we can decide to pause it or not. Now taking this decision is not a good timing. 

The grin community can then decide if this is enough or we should pause it or dissolve it.

__dtavarez__ : with friends like that I'd rather have enemies

__cekickafa__ : what are you talkin about?

__dtavarez__ : like I said, too much focus on the payments topic.but that is just one thing. just one

__anynomous__ : I agree with @mcmmike, lets just all formulate or opinion on the forum, collect feedback from the comunity and then agree on what to do. Also, if you keep experiencing the CC as to much burden @dtavarez, maybe better to just drop it or clearly drop tasks. No one should feel like it is causing burnout or dissent. It is sometimes a good option to not save the day as you have been doing, then others are forced to step up.

__dtavarez__ : I've been asking for merely opinions about the Farm... no answer yet
0
nada

__anynomous__ : I gave my opinion long time ago.

__dtavarez__ : yep

__anynomous__ : Lets make this a TO DO tasks, we all formulate our opinion on the farm in the CC chat.
TO DO 2 we all express our opinion and ideas on how to proceed on the forum.
This is another simple procedural solution, by making TO DO's we make expectations clear, we all know what we should do, no way to wiggle out of our responsibilities.

__dtavarez__ : there is not enough motivation to take responsibility, my point is being proven.

__Mcmmike__ : Yes a Todo list and project overview is also good idea. We can then assign someone to it or pick one from the community to help us.

__dtavarez__ : there is no need to remind anyone what to do, no one here is 15 years old

__Mcmmike__ : We are here , this is motivation enough. Your point is not proven!

__anynomous__ : Yes. In other councils, I always started with the past to do lists, to check if we did our tasks. I suggest we introduce this habit here. I also think the OC did this as a way to force checking on progress.

__dtavarez__ : if no responsibility is taken for anything, the CC must return the funds

>__Mcmmike__ : We are here , this is motivation enough. Your point is not proven!

It is 100%

__future3000__ : 

>__dtavarez__ : I've been asking for merely opinions about the Farm... no answer

How would you like me to help here if i'm not anywhere near the facility and don't know the people running it ?

__dtavarez__ : I've been talking about this for months, and you had to wait until I made it excessively public to talk about it

__anynomous__ : @dtavarez You point is more like an opinion, you express how you personally experienced things which is fine. It is however not objective or expresses how others experienced things. Lets express our views, personal opinions more on the forum.
Keywords are motivation, habits, protocols, expectations, TO DO's.

Do we all agree to move forward the discussion on the forum and go to the next agenda point?

__dtavarez__ : no, I will say what I have to say where I have to say it.

__anynomous__ : Ok, You just type your opinion here, once you are done, we will move on.
Just tell use when you are done giving your opinion @dtavarez

__Mcmmike__ : 

>__dtavarez__ : I've been talking about this for months, and you had to wait until I made it excessively public to talk about it

No, as I am doing much in the background does not mean we have to wait for you to make the statement.

Getting KuCoin to this point was not easy but something I was constantly working on. Due to the outcome I did not want to raise expectations and kept it silent until now they publicly replied.

__dtavarez__ : I'm out bye. 👋

__anynomous__ : 👋

__Mcmmike__ : ? Why

__anynomous__ : Not sure, I think he has a rather strong emotional response to this topic. Which mean he probably should have vented it earlier.

__Mcmmike__ : Ok let's stick to agenda please.

anynomous  👍 `}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Proposal to add a payment management roll to the Groundskeeper duties.</h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__anynomous__ : I really am in favour. Who wants to take on the task of keeping track of payments and funding requests @cekickafa or @satoshocrat ?

__cekickafa__ : i can do it, already doing the finance reports.

anynomous, future3000  👍 

__Mcmmike__ : Can we have the spreadsheet on gihub and updated every time?

👍cekickafa

__cekickafa__ : yes, sure. Do you want it on excel format ?

__Mcmmike__ : We can provide the calculation based on Davids script

__anynomous__ : That would be great. Also, can we add to the agenda, the TO DO of the last meeting. Each time we can update the list of past+new TO DO's. In this way we can make sure we stay on top of our tasks

👍cekickafa, future3000

__Mcmmike__ : GitHub rows and tables are enough I think

👍cekickafa

__anynomous__ : Does @cekickafa have access to the CC github page?
I mean also to the project notes.

__cekickafa__ :  No, i dont

__anynomous__ : I think we should change that.

__Mcmmike__ : We can give him access to some repos not all like finance for example.

👍 anynomous

Like the agenda one , is this a good place ?

👍 anynomous, mcmmike

__anynomous__ : I think that would be a good step forward, @cekickafa can provide the continuity of monitoring things that individual members cannot since we all have our downtime at times.

👍cekickafa
 
                    
                    
            `}</ReactMarkdown>

                {/*Issue 3*/}
                <h1 id="issue_3"  className="text-xl mt-10 mb-4 px">3. Unlock the Python CFFI secp256k1-zkp wrapper and Ledger hardware wallet support bounties.</h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`__anynomous__ : Should we unlock the Python CFFI bounty? I think we should first ask for an update, or did @renzokuken add this topic. He is on top of this.

👍 anynomous, mcmmike, nicolasflamel

__future3000__ :

>__anynomous__ : That would be great. Also, can we add to the agenda, the TO DO of the last meeting. Each time we can update the list of past+new TO DO's. In this way we can make sure we stay on top of our tasks

Can we also get the meeting notes updated on the grincc site?

🙏🏻 anonymous 👍 defistaker ,💯 cekickafa

__anynomous__ : @defistaker ?

👍 defistaker

__Mcmmike__ : I did merge them from time to time still some pending ?


__cekickafa__ : i will open a forum section for meeting notes and agenda also, update regularly.

👍 future3ooo

__defistaker__ : I will try to update it regularly from now on.

🙏🏻 anonymous 👍 future3ooo

__Mcmmike__ : 

>__defistaker__ : I will try to update it regularly from now on.

Please ping me to merge them when you have done your pull request.

__cekickafa__ : i will ping Mike

👍  mcmmike

__anynomous__ : Regarding the ledger bounty, is the bounty even from the CC🤔. I am quite certain the bounty is from the OC, so they should manage it and make such decisions. @yeastplume @phyro @quentinlesceller. If I remember correctly, @quentinlesceller created this bounty.


__cekickafa__ : https://forum.grin.mw/t/locked-support-ledger-wallet/8517

👍 anynomous

__anynomous__ : So indeed, the bounty is managed by the OC. They can make these decisions.

I think that means we discussed all our agenda topics for today.
Lets all remember our TO DO's.

- TO DO 1: Give our opinion on the forum, think on procedural improvements, expectations, habits as well as our personal responsibility as part of the CC.

- TO DO 2: Give our opinion on the mining farm in the CC Telegram chat.

__cekickafa__ : 👍 

__anynomous__ : Thanks all for being here, and wow, 4 CC members present, that is recent record. Lets keep up this spirit of participation 😁

😁future3ooo

__Mcmmike__ : The pending questions and request from David should we vote on them , even it was on short notice ? Am I dropping out here ( Internet?) Or did everyone leave?

__future3000__ : I'm here

__phyro__ : not sure what the state of the ledger bounty is tbh, wasn't following that part closely

__Mcmmike__ : Did the meeting finish?

__cekickafa__ : i am here.

__future3000__ :

>__Mcmmike__ : Did the meeting finish?

Looks like it.  Any vote for CC to return funds should be pushed to the next meeting, following further open discussion.

__Mcmmike__ : Ok I would suggest the following:
We proceed as described above , and we postpone the decision about pausing CC to next meeting.

__phyro__ : I think you guys may be putting too much on your shoulders
I don't think it should be expected of CC to push for things to happen. This requires time from volunteers. The opportunity is there for anyone to come up with an idea that would be evaluated

💯 anynomous

__future3000__ : 

>__Mcmmike__ :Ok I would suggest the following:
We proceed as described above , and we postpone the decision about pausing CC to next meeting.

There is also the payment we need to make to David for the G1 shipping (1,992 USD)

__Mcmmike__ : I will be off in 15min due to other meetings. Please highlight me if you need an answer from me.

__cekickafa__ : Ok, there is also other bounty 256k1 python wrapper. But related person is absent, walkbackgod. I will contact him.

👍 future3ooo

Thats all i think.
👋

__Mcmmike__ : Thank you and remember we all are GRIN.

__yeastplume__ : This may sound daft, but it actually motivates me to see this kind of activity going on, even if there are arguments. It means people care :D It can be lonely working away on the code without a lot of feedback or a ton of project activity, so happy to see everyone in the same place and talking.
Also, echo what phyro says, I'd say don't worry too much about 'pushing', it's a long-term project in for the long haul.
       

__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> Further discussion about MW/Grin Workshop+Hackaton in Istanbul at forum post. </li>
                    <li><RhombusItem /> Push voting for GRINCC dissolve to next meeting.</li>
                    <li><RhombusItem /> Contact @walkbackgod about python wrapper situation. </li>
                    <li><RhombusItem /> Pending payment request about g1 asic shipping from @davidt to be voted. </li>
                </ul>
            </div>
        </section>
    );
}

