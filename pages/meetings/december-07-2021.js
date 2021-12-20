import React from 'react';
import UserIcon from "../../components/icons/userIcon";
import RhombusItem from "../../components/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import RightArrow from "../../components/icons/rightArrow";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../components/icons/downRightArrow";




function December072021(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes December 7, 2021</h1>

            <p className="py-8">Community Council (CC) meeting held @ 15 UTC in grincoin#general channel on Keybase. Meeting lasted 40 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
            <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
            <ul>

                <li><UserIcon /> anynomous</li>
                <li><UserIcon /> phyro</li>
                <li><UserIcon /> yeastplume</li>
                <li><UserIcon /> mark_hollis</li>
                <li><UserIcon /> quentinlesceller</li>
                <li><UserIcon /> cekickafa</li>
                <li><UserIcon /> defistaker</li>
                <li><UserIcon /> tromp</li>
                <li><UserIcon /> jankie1800</li>
                <li><UserIcon /> scillo</li>

            </ul>
            </div>
            <div className="py-4">
            <h1 className="header-2" >Short Summary</h1>
            <ul className="space-y-2">
                <li><RhombusItem /> upbit listing proposal turns out to be a scam.</li>
                <li><RhombusItem /> Inflation bugs bounty is set without a deadline. Prize will be paid by OC. After each bounty, OC reserves the right to adjust prize amount.</li>
                <li><RhombusItem /> @scillo's payment for coinswap implementation - milestone 1 is approved. </li>
                <li><RhombusItem /> @yeastplume has started working on codebase with PIBD work. He plans to work on better usability, user experience and synctimes. </li>
            </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li>Vote to offer inflation bugs bounty (by OC) VOTE PASSED (YES) <DownRightArrow/></li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
            <h1 className="header-2">Agenda Points</h1>

            <p>Last meeting's notes <a href="/meetings/november-23-2021" className="text-primary text-sm" > here</a> </p>

            <ul className="space-y-2">
                <li>1. Upbit listing proposal <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                <li>2. Inflation bugs bounty <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                <li>3. Request for funding Groundskeeper @jankie Dec-Feb 2021/22<a href="#issue_3" className="text-primary"><DownRightArrow/>  </a> </li>
                <li>4. Update on payment for @scilio's coinswap implementation - milestone 1<a href="#issue_4" className="text-primary"> <DownRightArrow/>  </a> </li>
                <li>5. Development update by @yeastplume<a href="#issue_5" className="text-primary"> <DownRightArrow/>  </a> </li>
            </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Upbit listing proposal forum link , upbit listing criteria document  </h1>
                <ReactMarkdown  >
                    {`* __anynomous__ : https://upbit-sg-static.upbitit.sh/guide/listing_criteria_1.pdf

* __jankie1800__ : still scam?

* __anynomous__ : I did not add this to the agenda, but I foresee there might be some troubles with listing on Upbit, e.g.
No, not scam, just their formal requirements. 

* __cekickafa__ :  __defistaker__ contacted them.its a scam i think
ok.not

* __anynomous__ : True, the contact on the forum was clear scam, 'he give me some Bitcoin for security reasons' you would get it back within a month.
I am supprised he did not offer to double it :joy:

* __defistaker__ : There has not been any response from OP in the forum

* __anynomous__ : In any case, if we are interested listing on Upbit is possible. There are however quite some reasons why it could be difficult, e.g.
"To assess the ML/TF risk of the token issuer, the Company will require CDD AML/CFT policy 
of the token issuer, where applicable and check if it is consistent with the most recent standard, set by FATF"

* __cekickafa__ : upbit dont list privacy ones afaik

* __anynomous__ : Exactly, they are a hassle to get approved. 
"The Company will check the issuer’s legal entity information including its name, business registration number, 
incorporation  date,  country  of  incorporation,  place  of  operation  and  articles  of  association"
... not sure how we would fit in with this

* __cekickafa__ : grin don't fit...

* __anynomous__ : My first instincts is to say Upbit might not be for Grin, unless they themselves want to list it.

    I am more hopeful with parties like Bisq that do fit with the spirit of Grin.
In the end, we only need a few good exchanges for a working ecosystem.

    So should we agree to leave it at that and move on to the next topic, or is there anything more to be said?

* __cekickafa__ : next pls`}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Inflation bugs bounty </h1>
                <a className="text-primary" href="https://forum.grin.mw/t/bounty-suggestion-inflation-bugs/8628/15" >https://forum.grin.mw/t/bounty-suggestion-inflation-bugs/8628/15</a>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {` * __anynomous__ : This topic has been on the shelve for some time, while it should not be. Having a bounty improves security since it give incentive for people to dig in the code.

    I think one reason might be because it is not clearly for any council, it is for both OC and CC.

* __jankie1800__ : it seems to be a popular suggestion. I personally think it is an excellent motivator and good for the codebase

* __anynomous__ : Personally I think a bounty should be put, and we have to discuss a bit between OC and CC how to share the possible cost, I would think per ratio of our funds.

* __cekickafa__ : per ratio logical

* __anynomous__ : This is however not something we can vote on in name of the OC, but I think they also find this very important.

* __phyro__ : We either get exploited with it (the sooner the better or preferably never lol), or we get an exploit fixed or the lindy on the trust of the chain increases over time

* __jankie1800__ : is there anyone from OC who can comitt to an agreement to split the bounty. They may need to discuss among themselves but I think CC should be informed

* __phyro__ : I can't speak for other members in the OC, but I do believe we find having a bounty on this important. I'd personally be ok with splitting it, but would need to ask others about their opinion

    do we agree on the types of inflation bugs etc.?

* __yeastplume__ : I'm okay with it as well, in principle

* __phyro__ : and the prize amounts

* __anynomous__ : That is good enough for now, the CC also does not have quorum right now in this meeting, so we will also have to get back to it. But we can discuss the intend here if this is something the community agrees on.

* __jankie1800__ :  __phyro__ can you act as intermediary between councils for the time being-- just confirm you spoke and all agree

* __tromp__ : i'm even fine with OC covering the entire bounty (but that's maybe just me)

* __quentinlesceller__ : I'm fine with it too

* __anynomous__ : I have to little knowledge to say if the prices are low-good-high.  Well we could also make it OC bounty, nice to see the OC back in action.

* __cekickafa__ : is this a continous prize or have a deadline? time I mean

* __anynomous__ : In any case, if this somehow hampers the funds of the OC, we can always discuss balancing again our funds since this is essential for the project and also supported by the CC.

* __tromp__ : no deadline

* __cekickafa__ : so how its gonna be announced? from social channels?

* __jankie1800__ : it really seems like we have the support to get this live

* __phyro__ : I'm also ok with OC covering all of it. We'd have to estimate on what that means though, in theory there could be N of inflation bugs, do you then lock N*prize if they can be fixed?

* __yeastplume__ : Yes, I agree. It's very important to the credibility of Grin, so no deadline.

* __tromp__ : after each successful bounty claim we reserve the right to adjust amounts for future bounties

* __anynomous__ : That sounds reasonable

* __tromp__ : to prevent running out of bounty funds

* __anynomous__ : Also because revealing a bug might lead to us discovering more ourselves, otherwise it could be chopped up on purpose.

* __yeastplume__ : I think we're all okay in principle, but we need to g o hammer out details and report back

* __anynomous__ : Sounds good to me. If the CC's funds are needed for this, just give a shoutl

* __jankie1800__ : forum post?

* __phyro__ : alright, the purpose was to get this thing moving forward :+1:

* __anynomous__ : And it did :+1:, two councils willing to fund if need be.
            `}</ReactMarkdown>

                {/*Issue 3*/}
                <h1 id="issue_3"  className="text-xl mt-10 mb-4 px">3. Request for funding Groundskeeper @jankie Dec-Feb 2021/22 </h1>
                <a href="https://forum.grin.mw/t/request-for-funding-groundskeeper-jankie-dec-feb-2021-22" className="text-primary">
                    https://forum.grin.mw/t/request-for-funding-groundskeeper-jankie-dec-feb-2021-22
                </a>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
                
* __jankie1800__ : indeed I have requested to remain onboard with working with the project
    not much to add outside of the forum post other that I am committed to developing repeatable tasks for the project.

* __anynomous__ : What do other think, in favour of extending the funding with another 3 months, or against, thumbs up or down please. Or if you have questions, feel free to ask them now.

    Have you achieved all targets you had for the last 3 months * __@jankie1800__ ?

* __jankie1800__ : I feel confident in the work committed is of value to the project and will continue to refine to meet better efficiency

    past 3 months have been onboarding and developing on the tasks. as these become more clear there will be more opportunity to capitalize on the inititaives

* __anynomous__ : Good. I think it is also important that if as community there are tasks we see fit for our groundskeepers, we will bring them to their agenda, using the forum post for their funding requests and progress updates.

* __jankie1800__ : overall I think the inititives are worth pursuing in a focused manner-  developer outreach, documentation, assisting when needed plus identifying new campaigns and opportunities is essential imo

* __phyro__ : I wasn't following that much in the past months so I can't comment on the work, but looking at the bulletpoints, I think they should be more measurable. The first two are clear, the other points are a bit vague to me

* __anynomous__ : Good point, it is always good to have measurable targets, this counts for developers as well as others. Also it makes it easier for yourself to have achievable milestones.

* __jankie1800__ : agreed, I am working to create more clearly identifiable work items. which is acctually the vaguesness i.e 'identigy campaigns and opportunites'

* __phyro__ : it's also easier to evaluate the work imo

* __jankie1800__ : i agree completly. when working in this field it is becoming clear that identifiable action is transparency 

    I do seek to expand on these clearly in the ongoing work progress threads:

    https://forum.grin.mw/t/jankie-progress-update-thread/9316

* __cekickafa__ : well it is hard to make milestones for middleman i think

* __anynomous__ : Yes, another way to do it is since quite a few points are upon 'need be' basis, that you have some backup tasks or long term projects you can switch to if there is a gap. Anyhow, this is something to work on and define over time.
Is anyone against funding, if not I think we can conditionally approve this request?

    Since the CC does not have quorum we will still have to vote on it and we will post the results on the forum, but I do not expect any objections. 

    Lets move on to the next topic
                
`}
                </ReactMarkdown>

                {/*Issue 4              */}
                <h1 id="issue_4"  className="text-xl mt-10 mb-4 px">4. Update on payment of @scilio's coinswap implementation (milestone 1)</h1>
                <a href="https://forum.grin.mw/t/request-for-funding-scilio-coinswap-implementation/9149/55"
                   className="text-primary">https://forum.grin.mw/t/request-for-funding-scilio-coinswap-implementation/9149/55</a>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
* __anynomous__ : We have received the address information from scilio and are now organizing the transfer. I expect it to be done in the next 1-2 weeks, we will post an update on the forum as soon as the transfer is complete. It might take a bit of time since we want all 6 signatures on board to use as security proof.

    If there are no objections, at the same time we will transfer the funding for the coming 3 months  __@jankie1800__ 

* __jankie1800__ : perhaps you may need to discuss further with other CC members- I would prefer to have consensus

* __anynomous__ : Discuss which first with the OC, your funding?

* __jankie1800__ : apologies.. typo. I mean if any CC are not here today to express their  opinion

* __anynomous__ : If you mean the payment to @scilio, the CC will pay the first 10k pound bounty for the first milestone. We are however very open on how to fund further milestones of the CoinSwap by either OC or CC. We do not mind sharing costs, e.g. 50% by OC oand 50% by the CC.

    This is something we can further discuss in future meetings.
`}

                </ReactMarkdown>

                {/*Issue 5              */}
                <h1 id="issue_5"  className="text-xl mt-10 mb-4 px">5. Development update by @yeastplume </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
* __anynomous__ : Let us know what is going on in the belly of the beast.

* __yeastplume__ : Sure, well there's been some good progress in the last few weeks. Personally I've been spending some time getting acquainted with parts of the code I've never really looked into in detail, but also starting to get some chunks of work moving again.

    I originally started by picking up the PIBD work, and there's been some good progress there with a few PRs picking up on previous work, and now its at the stage where we can almost simulate the reconstruction of the hashset via PIBD segments, so we can essentially copy a hashset locally via PIBD now.

* __jankie1800__ : I noticed you and __tromp__ really hitting both libraries hard.. Be sure to take some rest 

* __anynomous__ : That sounds like some nice progress. The next step is to test with multiple nodes?

* __yeastplume__ : But in looking into that, we've turned up a few performance issues on the header portion of the sync, and we've been looking into that for a while. Through some profiling and fixes we've made good progress there. I have a 100k header validation test that was taking 75 seconds to complete before these changes, which we now have to around 20-25 seconds. There's more improvement can be done there as well, I'm sure, which I'm looking into. I guess what's started as PIBD work has turned into general sync improvement

>  * __anynomous__ : That sounds like some nice progress. The next step is to test with multiple nodes?

>> * __yeastplume__ : Yes, that's coming but I want to get better testing in place first so we can build the sync portion with confidence in the underlying code

* __anynomous__ : Better performance would be great, sounds like optimising and testing first takes priority.

    Anyway, this is not something that is on time pressure but something that could really improve the user experience on the long run.

* __yeastplume__ :  __tromp__ has done some serious work refactoring some core PMMR code to be zero indexed where possible (it was 1 indexed before, which was confusing), and has also make some optimisations to pow validation across all 4 birds

* __anynomous__ : Wow nice, sounds like github is buzzing

* __yeastplume__ : Definitely, in my head at the moment the focus over the mid-term needs to be usability and user experience, and sync times are a huge part of that so it's a great place to get stick back into Grin development. It also touches a lot of the code that wasn't developed by me, so it's helping me get up to speed.

    And that's it for now, hopefully we can get development snowballing again. I hope to sit down with the core team and get a larger plan in place starting early next year, but that will come in time

* __anynomous__ : No rush, but I am really exited about these developments since they will really affect usability!

* __cekickafa__ : pibd? usability? was it somethnig related to relay service? sorry i am nontech :)
or faster

* __anynomous__ : In  short, think torrent like peer to peer chunking data for more efficient syncing.

* __phyro__ : pibd = syncing the node

* __yeastplume__ : this is more about the time it takes to bring new nodes online

* __cekickafa__ : thanks, I get it

* __yeastplume__ : The data set is getting bigger, so it's becoming more important to get these things optimised.

* __anynomous__ : Probably because there are so few archive nodes online.

* __phyro__ :  @* __yeastplume__ will pibd also be for archive nodes?

* __cekickafa__ : ok. i dont get it. if its pruning. do we need for archieve nodes for checkpoints? excuse me again

* __yeastplume__ : at the moment it's doesn't cover passing stored blocks around

    Archiving just refers to keeping original block data. They kind of get split up and merged into a general transaction set and just the header is kept around permanently.

    most nodes will delete the original block data once blocks are old enough

* __anynomous__ : Is that an automatic process, the deleting?

* __yeastplume__ : yes, unless the node turns on archive mode

* __scillo__ : 

> * __anynomous__ : If you mean the payment to @scilio, the CC will pay the first 10k pound bounty for the first milestone. We are however very open on how to fund further milestones of the CoinSwap by either OC or CC. We do not mind sharing costs, e.g. 50% by OC oand 50% by the CC.


>> * __scillo__ : Sorry I'm late. Is CC only paying half of the bounty? This was discussed last meeting and the conclusion I thought was that CC was paying all.

* __anynomous__ : Well, the CC is paying 100%, or if later on the OC offers to for example fund milestone 3, they can do so. In either way, funding is secured after finishing each milestone.

* __scillo__ : Sorry I'm late. Is CC only paying half of the bounty? This was discussed last meeting and the conclusion I thought was that CC was paying all.

* __anynomous__ : Well, the CC is paying 100%, or if later on the OC offers to for example fund milestone 3, they can do so. In either way, funding is secured after finishing each milestone.

* __scillo__ : https://github.com/grincc/agenda/blob/main/notes/09-23-2021-council-meeting-notes.md#7-review-of-scilios-coinswap-milestone-1--discuss-approval-for-milestone-2-start

    ok, 100% of milestone 1 would be 10k pounds :)

* __anynomous__ : O, yes, sorry about that. I will correct it.
Unless you want to give us a discount :stuck_out_tongue_winking_eye:

* __scillo__ : cool. just double checking :)

* __phyro__ : just checking if you're around scilio ;P

* __anynomous__ : Anyhow, that is all for today's meeting, unless there are any updates to give by @scilio?

* __scillo__ : I'm making progress on Milestone 2, but no juicy updates yet

* __anynomous__ : Sure, no need. We know you put in the work :+1:

    In that case, I would like to close the meeting for today. Thank you all for being here, and nice to see so many of the OC around today.
Feel free stay around and continue the discussions:grin:.


__Meeting adjourned__
                
`}


                </ReactMarkdown>



            </div>


            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Details for inflation bugs bounty will be discussed internally by OC.</li>
                    <li><RhombusItem />Groundkeeper's task list will be clarified for better performance measurability.</li>
                    <li><RhombusItem />jankie's groundkeeper's fund proposal will be voted by CC and announced on the forum.</li>
                    <li><RhombusItem />@scillo's payment for coinswap implementation - milestone 1 will be transferred in the next 1-2 weeks and announced on the forum.</li>

                </ul>
            </div>





        </section>
    );
}

export default December072021;