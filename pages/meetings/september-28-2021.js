import React from 'react';
import UserIcon from "../../components/icons/userIcon";
import RhombusItem from "../../components/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import RightArrow from "../../components/icons/rightArrow";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../components/icons/downRightArrow";


function September282021(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes September 28, 2021</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted 40 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
            <ul>
                <li><UserIcon /> anynomous</li>
                <li><UserIcon /> jankie1800</li>
                <li><UserIcon /> cekickafa</li>
                <li><UserIcon /> defistaker</li>
                <li><UserIcon /> future3000</li>
            </ul>

            <h1 className="text-2xl text-gray-800 pt-12 pb-4" >Short Summary</h1>
            <ul>
                <li><RhombusItem /> Previous contributors of grin project will be listed.</li>
                <li><RhombusItem /> Developers from other mimblewimble protocol projects will be contacted for atomic swap code review.</li>
                <li><RhombusItem /> @mcmmike contacted NHash and reserved G1 mini miners in the upcoming batch. Purchase of miners expected to be completed in following months. </li>
            </ul>

            <h1 className="text-2xl text-gray-800 pt-12 pb-4" >Agenda Points & Actions </h1>

            <p>Last meeting's notes <a href="/meetings/september-14-2021" className="text-primary text-sm" > here</a> </p>


            <ul>
                <li>  <a href="#point_0" className="text-primary">Opening <DownRightArrow/> </a> </li>
                <li>  <a href="#point_1" className="text-primary">2. Atomic Swap PR: status and next steps <DownRightArrow/> </a> </li>
                <li> <a href="#point_2" className="text-primary"> 3. Implementation of multiple named wallets in the grin-wallet system by sheldonth.<DownRightArrow/> </a></li>
                <li><a href="#point_3" className="text-primary"> 4. Miners: next steps.<DownRightArrow/>  </a> </li>

            </ul>
            <div className="px-8" >

                <h1 id="point_0"  className="text-xl mt-10 mb-4 px"> Opening  </h1>

                <ReactMarkdown  >
                    {`__anynomous__ : Before we start with the agenda today, let me just repeat this announcement, in case anyone lived under a rock in the passed week and missed it😉:
Announcements
Community council received funds of 33 BTC:
https://forum.grin.mw/t/grin-community-council-cc-received-funds-of-33-btc-lets-get-to-work/9247   

__jankie1800__ : exciting news! I am happy to hear OC and Community council have progressed on this initiative  

__anynomous__ : Yes, we are ready to accept any reasonable applications for funding of any Grin related projects or events :grin:  

__jankie1800__ : my understanding is we need devs to implement and check the work. Something I hope to report back to the community on soon as I have been working dev-outreach.

__anynomous__ : Exactly.`}
                </ReactMarkdown>

                <h1 id="point_2"  className="text-xl mt-10 mb-4 px">1. Atomic Swap PR: status and next steps  </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`

 
__anynomous__ : As for agenda point 1. The Atomic Swap implementation is ready to be pulled, but it requires some extensive reviewing.
For the moment we most need developers and people with a background in cryptography to check the implementation. __@phyro__ and __@tromp__ come to mind, but they already have a lot on their plate.
So on the long run, we really need some extra hands/eyes.  

__jankie1800__ : gene has committed to staying on with the community for the time being, that will be very helpful for whomever is brought on to implement

__anynomous__ : That is great news, that will speed things up.

__cekickafa__ : thats really cool.

__jankie1800__ : bit of a time is of the essence thing also. Strike while the iron is hot metaphor

__anynomous__ : Maybe we should start a training program for cryptography, so we get some more people in the community who could help out.

__jankie1800__ : best training is using the tools developed imo ;)

__anynomous__ : true, in practice coding and cryptography go hand in hand.

__future3000__ : We could try reaching out to other MW projects who have implemented Atomic swaps,eg Beam and ask for comments ( MWC coin claim to have to have it implemented as well, but no telling how secure theirs is).  Beam's lead dev would be an ideal person to review it.

__anynomous__ : __@future3000__ that is a great idea. Beam and Grin devs have worked together a lot in the passed and if Beam already solved an issue, or Grin, we should simply share the knowledge.

__anynomous__ : This also gives me an idea, maybe we should start to actively map the present and past people who have been involved in Grin, so we have hotline to people who might actually be willing to start contributing again in the project, but who are not anymore active.

__cekickafa__ : How can Grin stays behind of mwc and other implementations. thats strange and awkward really. if its the money ,Grin had the funds too.

__anynomous__ : True, it is indeed a bit weird. There is actually a large network of old contributers and people who care for Grin, it is just that they are not "put to work".

__cekickafa__ : thats a problem of us..we better criticize ourselves. where did we stall?

__anynomous__ : Indeed. I think the difference is also we have few people on permanent payroll, that is a handicap since it means good people jump to other projects.

__cekickafa__ : and this problem continues...

__future3000__ : 
> How can Grin stays behind of mwc and other implementations. thats strange and awkward really. if its the money ,Grin had the funds too. 

I think part of the issue is that we don't have a lead developer, so have lacked direction.

__anynomous__ : Indeed. There is no one person calling the shots, and if one or a few people do call the shots (e.g. Original Council anyone ;)), well people complain about it :sweat_smile:

For now that is not something we can tackle, also we should not forget the merits of having a distributed governance model with many involved.

__cekickafa__ : OC done their best ,but obstacles..idk community shrank.ecosystem extremely shrank,thnx to asics now it rails

__anynomous__ : Yes, in the end what we want to move to (or at least I would like that), is that we have the two councils, as well as working groups of people who do whatever they are best at. Meaning developers develop, artists make wallpapers and great art, others simply share their input.

__cekickafa__ : if maybe better reconsider and start from here https://github.com/mimblewimble/grin-pm/issues/385

__anynomous__ : The same goes for the network, we need to make this a dedicated group, people who know and grow the network of developers and cryptographers.
And yes, that means we can get to work and bring others to work on that great wishlist: :point_up_2:

For now, I think we can pause this topic to be discussed more later.
As far as todo's are concerned, we can start the outreach to developers, as well as list all past developers to get a better overview of the potential network of Grinners.
            `}</ReactMarkdown>

                <h1 id="point_3"  className="text-xl mt-10 mb-4 px">3. Miners: next steps. </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
__cekickafa__ : that become a very long story:)

__anynomous__ : Yes, long story 😅

So as update, although we have funding now, unfortunately the last batch of miners was just sold out.
__@mcmmike__ reached out to NHash and they promised to reserve the miners in the upcoming batch. So hopefully in the coming months we will get that shipment of miners.

__cekickafa__ : hope so 😀

__anynomous__ : Anyhow, it is a pity that we miss out on 1-2 months of mining, on the  other hand. The new batch might be better or have those cool pictures they showed on Twitter.

Apart from that there is not much to discuss about the miners. Hopefully we will have some good news any time soon.
I would also like to remind you, that if you are willing to host G1 miners for the community, you can reply to this topic:
https://forum.grin.mw/t/community-council-miners-we-need-your-opinion/9133

__cekickafa__ : g1 or g1 mini? i can host g1 mini but not sure g1 :)

anynmomous : Most likely it will be all G1 mini's, between 42-48 miners.

around 12 can be hosted by the council, which means there will be another 30 to put with community members as well as combined in a mining facility with cheap electricity.

I also would like to get some To Do's from this meeting.
In general I think we need to better map the people in the community, what they like to work on, especially developers and cryptographers. I would like to volunteer to be part of the group who searches and lists old Grinners that might be 'reactivated' to start Grinning again.
Also we can map community members with others interests who might want to form sub-groups that can meet a few times a year or more often, depending on how much time they are willing to spend.

__cekickafa__ : perfect!

__anynomous__ : Exactly, we are in in a great position to expand, build, systemize and further decentralise everything that is happening in this great project. It is time for the next step, working groups.
`}

                </ReactMarkdown>
            </div>




        </section>
    );
}

export default September282021;