// Import react rendering modules.
import React from 'react'

/**
 * @name MyAnime
 * @memberof React.Component
 */

export default class MyAnime extends React.Component {
    render(animeURL = id => `url(http://hacking-with-ht.ml/kurasad/animes/${id}.jpg`) {
        return (
            <div className="myanime">
                <h1> My Anime List

                    {/* MyAnime page link svg with functionality. */}
                    <div id="svg" onClick={_ => global.Notif(`${window.location.origin}/myanime`)}>
                        <svg version="1.1" id="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
                            <g><g><path d={global.Link.p1} /></g></g>
                            <g><g><path d={global.Link.p2} /></g></g>
                        </svg>
                    </div>
                </h1>

                {/* Title/Content divider. */}
                <hr />

                {/* Content of certifs page. */}
                <div className="content">

                    {/* Cell: BLEND-S. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`blends`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> BLEND-S </div>
                    </div>

                    {/* Cell: Overlord. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`overlord`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Overlord </div>
                    </div>

                    {/* Cell: Overlord II. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`overlord2`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Overlord II </div>
                    </div>

                    {/* Cell: Overlord III. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`overlord3`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Overlord III </div>
                    </div>

                    {/* Cell: The Testament of Sister New Devil. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ttsnd`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> The Testament of Sister New Devil </div>
                    </div>

                    {/* Cell: My Roommate is a Cat. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`rcat`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> My Roommate is a Cat </div>
                    </div>

                    {/* Cell: Kaguya-sama: Love is War. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ksliw`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Kaguya-sama: Love is War </div>
                    </div>

                    {/* Cell: I want to eat your pancreas. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`iweyp`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> I want to eat your pancreas </div>
                    </div>

                    {/* Cell: Assassination Classroom. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ascs`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Assassination Classroom </div>
                    </div>

                    {/* Cell: Assassination Classroom Second Season. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ascsss`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Assassination Classroom Second Season </div>
                    </div>

                    {/* Cell: BBK/BRNK. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`bbkbrnk`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐ <div>3/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> BBK/BRNK </div>
                    </div>

                    {/* Cell: BBK/BRNK: The Gentle Giants of the Galaxy. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`bbkbrnk2`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐ <div>3/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> BBK/BRNK: The Gentle Giants of the Galaxy </div>
                    </div>

                    {/* Cell: One Punch Man 2nd Season. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`opm2`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐ <div>3/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> One Punch Man 2nd Season </div>
                    </div>

                    {/* Cell: The Irregular at Magic High School. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`imhs`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> The Irregular at Magic High School </div>
                    </div>

                    {/* Cell: Domestic Girlfriend. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`dogi`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Domestic Girlfriend </div>
                    </div>

                    {/* Cell: K Return of Kings. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`krk`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐ <div>1/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> K Return of Kings </div>
                    </div>

                    {/* Cell: Akame ga Kill! */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`agk`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Akame ga Kill! </div>
                    </div>

                    {/* Cell: High School DxD. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`hsdxd`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐ <div>2/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> High School DxD </div>
                    </div>

                    {/* Cell: Tokyo Ghoul. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`togu`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Tokyo Ghoul </div>
                    </div>

                    {/* Cell: Monster Musume: Everyday Life with Monster Girls. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`mmelmg`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐ <div>3/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Monster Musume: Everyday Life with Monster Girls </div>
                    </div>

                    {/* Cell: Dr. Stone. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`drs`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Dr. Stone </div>
                    </div>

                    {/* Cell: JoJo's Bizarre Adventure. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`jjba`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> JoJo's Bizarre Adventure </div>
                    </div>

                    {/* Cell: JoJo's Bizarre Adventure: Stardust Crusaders. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`jjbasc`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> JoJo's Bizarre Adventure: Stardust Crusaders </div>
                    </div>

                    {/* Cell: JoJo's Bizarre Adventure: Diamond is Unbreakable. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`jjbadu`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> JoJo's Bizarre Adventure: Diamond is Unbreakable </div>
                    </div>

                    {/* Cell: JoJo's Bizarre Adventure: Golden Wind. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`jjbagw`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> JoJo's Bizarre Adventure: Golden Wind </div>
                    </div>

                    {/* Cell: KonoSuba: God's Blessing on This Wonderful World!. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ksgbww`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐ <div>3/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> KonoSuba: God's Blessing on This Wonderful World! </div>
                    </div>

                    {/* Cell: Death Note. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`deno`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Death Note </div>
                    </div>

                    {/* Cell: The Disastrous Life of Saiki K. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`tdlsk`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> The Disastrous Life of Saiki K. </div>
                    </div>

                    {/* Cell: The Disastrous Life of Saiki K. 2. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`tdlsk2`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> The Disastrous Life of Saiki K. 2 </div>
                    </div>

                    {/* Cell: Assassins Pride. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`aspr`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐ <div>3/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Assassins Pride </div>
                    </div>

                    {/* Cell: The Irregular at Magic High School: Visitor Arc. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`timhsva`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> The Irregular at Magic High School: Visitor Arc </div>
                    </div>

                    {/* Cell: Dr. Stone: Stone Wars. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`drssw`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Dr. Stone: Stone Wars </div>
                    </div>

                    {/* Cell: Your name. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`yona`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Your name. </div>
                    </div>

                    {/* Cell: Weathering With You. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`wwy`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Weathering With You </div>
                    </div>

                    {/* Cell: A Silent Voice. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`asv`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> A Silent Voice </div>
                    </div>

                    {/* Cell: Kaguya-sama: Love is War Season 2. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ksliw2`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Kaguya-sama: Love is War Season 2 </div>
                    </div>

                    {/* Cell: Don't Toy with Me, Miss Nagatoro. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`twmmn`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Don't Toy with Me, Miss Nagatoro </div>
                    </div>

                    {/* Cell: Attack on Titan. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`aot`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Attack on Titan </div>
                    </div>

                    {/* Cell: Attack on Titan Season 2. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`aot2`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐ <div>3/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Attack on Titan Season 2 </div>
                    </div>

                    {/* Cell: Attack on Titan Season 3. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`aot3`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Attack on Titan Season 3 </div>
                    </div>

                    {/* Cell: Attack on Titan Season 3 Part 2. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`aot3p2`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Attack on Titan Season 3 Part 2 </div>
                    </div>

                    {/* Cell: Attack on Titan Final Season. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`aotfs`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Attack on Titan Final Season </div>
                    </div>

                    {/* Cell: Jujutsu Kaisen. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`juka`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Jujutsu Kaisen </div>
                    </div>

                    {/* Cell: Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`dsknytmmt`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train </div>
                    </div>

                    {/* Cell: One Punch Man. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`opm`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> One Punch Man </div>
                    </div>

                    {/* Cell: That Time I Got Reincarnated as a Slime. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ttigrs`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> That Time I Got Reincarnated as a Slime </div>
                    </div>

                    {/* Cell: That Time I Got Reincarnated as a Slime Season 2. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ttigrss2`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> That Time I Got Reincarnated as a Slime Season 2 </div>
                    </div>

                    {/* Cell: Redo of Healer. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`roh`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐ <div>2/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Redo of Healer </div>
                    </div>

                    {/* Cell: Kakegurui××. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`kkgi`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Kakegurui×× </div>
                    </div>

                    {/* Cell: Kakegurui: Compulsive Gambler. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`kkgicg`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Kakegurui: Compulsive Gambler </div>
                    </div>

                    {/* Cell: The Millionaire Detective – Balance: UNLIMITED. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`tmdbu`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> The Millionaire Detective – Balance: UNLIMITED </div>
                    </div>

                    {/* Cell: Science Fell in Love, So I Tried to Prove It. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`sflsitpi`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Science Fell in Love, So I Tried to Prove It </div>
                    </div>

                    {/* Cell: Heaven's Design Team. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`hdt`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Heaven's Design Team </div>
                    </div>

                    {/* Cell: No Game, No Life. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`ngnl`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐⭐ <div>5/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> No Game, No Life </div>
                    </div>

                    {/* Cell: Fire Force. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`fifo`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Fire Force </div>
                    </div>

                    {/* Cell: Black Butler. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`blbu`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Black Butler </div>
                    </div>

                    {/* Cell: Darwin's Game. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`daga`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Darwin's Game </div>
                    </div>

                    {/* Cell: A.I.C.O.: Incarnation. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`aicoi`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐ <div>3/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> A.I.C.O.: Incarnation </div>
                    </div>

                    {/* Cell: Wonder Egg Priority. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`wep`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Wonder Egg Priority </div>
                    </div>

                    {/* Cell: SHIMONETA: A Boring World Where the Concept of Dirty Jokes Doesn't Exist. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`sabwwcdjde`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> SHIMONETA: A Boring World Where the Concept of Dirty Jokes Doesn't Exist </div>
                    </div>

                    {/* Cell: Haven't You Heard? I'm Sakamoto. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: animeURL(`hyhis`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> ⭐⭐⭐⭐ <div>4/5</div></div>

                        {/* Cell text. */}
                        <div id="txt"> Haven't You Heard? I'm Sakamoto </div>
                    </div>
                </div>
            </div>
        )
    }
}
