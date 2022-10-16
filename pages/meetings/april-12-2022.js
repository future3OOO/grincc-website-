import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function April122022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes April 12, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted 45 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> phyro</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>

                </ul>
            </div>
            {/*<div className="py-4">*/}
            {/*    <h1 className="header-2" >Short Summary</h1>*/}
            {/*    <ul className="space-y-2">*/}
            {/*        <li><RhombusItem /> upbit listing proposal turns out to be a scam.</li>*/}

            {/*    </ul>*/}
            {/*</div>*/}

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li>No decisions made  </li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/march-29-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Community Council Member Vote (Paoukys' Replacement) <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. After Meeting Follow up With @Scilio <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                    <li>3. New Developer Resource Section on Grin Community Github<a href="#issue_3" className="text-primary"><DownRightArrow/>  </a> </li>
                    <li>4. Update from Groundskeeper Cekickafa and former Groundskeeper Defistaker<a href="#issue_4" className="text-primary"> <DownRightArrow/>  </a> </li>
                    <li>5. Potential for In-Person Grin Community Meet Up<a href="#issue_5" className="text-primary"> <DownRightArrow/>  </a> </li>
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Community Council Member Vote (Paoukys' Replacement) </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__phyro__ : agenda topic could be paouky's replacement
 * __cekickafa__ : 
 > __anynomous__ - "Paouky has informed us that due to lack of time he wants to step down as the Community Council (CC) 6th member. Paouky has helped setup and kick-off the council, which we fellow council members are very grateful for. We respect and understand his decision to give his seat to someone who has more time available and we hope to still see him around active in this project when time allows him." 
 * __defistaker__ : It seems there are 3 candidates right now and deadline is 30 April
 * __phyro__ : we probably won't get an update on the progress on this unless there's someone from CC around... does this mean 1 of the multisig keys is missing at the moment or is paouky still around in case it's needed?
 * __anynomous__ : Yes, we will let Paouky keep the key and only switch to a new wallet if another member would switch. We took into account various security considerations and think this would be best.. So, the new council member will get Paouky's key, but Pauuky keeps a backup.
 * __anynomous__ : Started the election of the Grin CC 6th council member since Pauoky is stepping down:(https://forum.grin.mw/t/community-council-election-for-the-6th-cc-member/9698/7)
 * __defistaker__ : So what are responsibilities of a CC member, for people considering to apply?
 * __anynomous__ : CC members have the responsibility to 1) securely manage the key, keep a backup of it. 2) Be available for signing and for votes on spending's. 3) Preferably also some time to commit to it, since being a council member does take time, and the more active members we have, the better we can share the burdens and joys...  I will polish that post a bit later today adding the rules and more specifically the tasks. Since yes, it is a commitment.
 * __phyro__ : __@defistaker__ are you considering volunteering for a position in CC?
 * __defistaker__ : No, I asked for common knowledge `}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. After Meeting Follow up With @Scilio  </h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`
 * __yeastplume__ : so how is everyone feeling?
 * __anynomous__ : It feels like everything is going well. Only I would have liked some updates from __@scilio__
 * __phyro__ : I pinged __@scilio__ about a week ago, but haven't heard from them yet
may be worth pinging them on the forum as well
* __anynomous__ : I will ping him on the forum this week. 
                    
                    
            `}</ReactMarkdown>

                {/*Issue 3*/}
                <h1 id="issue_3"  className="text-xl mt-10 mb-4 px">3. New Developer Resource Section on Grin Community Github</h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
 * __anynomous__ : Something that I personal would like to dedicate some time on is to make it easier for community members to see where to start with developing. I added a section for it on thee Grin CC Hub, but after thinking about it more, I think we need to make a separate page on it altogether. E.g. list all the projects and their programming languages and frameworks, like @dtavarez did here:(https://forum.grin.mw/t/grin-development-libraries/8735/11?u=anynomous).. Also I would like to create a flowchart/UML diagram of the node and wallet. Make it easier for people to understand the flow of the code.
 * __defistaker__ : That would be great
 * __anynomous__ : When I say people, I am ofcourse also talking about myself. I would like to understand the code better, so I can be of some use😛 Also, I am working on a script to generate wallets using Python from either a mnemonic (using word list and checksum), or any other entropy, direct conversion to entropy bits of whatever the user feeds it, I assume a string.
           
 
                
`}
                </ReactMarkdown>

                {/*Issue 4              */}
                <h1 id="issue_4"  className="text-xl mt-10 mb-4 px">4. Update from Groundskeeper Cekickafa and former Groundskeeper Defistaker</h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`__defistaker__ : side note, meeting notes format is slightly changed, Short summary section is missing and voting results is replaced with decisions. Is this a permanent change because I am gonna change formatting in website.
 * __anynomous__ : Are there any updates from groundkeeper life?
 * __defistaker__ : Well, I am retired, retirement is nice 😄 
 * __cekickafa__ : well. i will make a progress update. life is going somehow :)
 * __phyro__ : retiring only means you go full time on Grin
 * __anynomous__ : __@defistaker__ Not really, even while sipping your cocktails on a far away island, your still around in this meeting 
                
`}

                </ReactMarkdown>

                {/*Issue 5              */}
                <h1 id="issue_5"  className="text-xl mt-10 mb-4 px">5. Potential for In-Person Grin Community Meet Up </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`__phyro__ : I remember there were talks about a meeting (or maybe a conference), but I can't recall if it was virtual or in person. Is there anything going on with this?
 * __defistaker__ : there was a conversation on community channel
 * __anynomous__ : I was thinking about planning that, but to be honest I am backing out a bit, since I have a lot going on at the moment. 3rd child on the way, PhD needing to be finished, house improvements and to little financing and time from my business...Although the will is there, I need to be realistic now and then unfortunately... But my plans were for the Netherlands. There are also plans for Berlin and somewhere near London I think by others... Would be great to have some physical meetings again.
 * __phyro__ : Regarding physical attendance, it would make sense if enough people would gather. Not sure what the state of this is today.
 * __anynomous__ :  I have to go in 1-2 minute. So sorry, I will read when I get back later today.
 * __cekickafa__ : it would be cool. Physical attendance would be more friendly and vivid. Altough less people might join... Any one to add something?
 * __defistaker__ : I guess we end here 
                


__Meeting adjourned__
                
`}


                </ReactMarkdown>



            </div>


            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Ping __@Scilio__ .</li>

                </ul>
            </div>





        </section>
    );
}

