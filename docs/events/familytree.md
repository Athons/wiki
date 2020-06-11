# Hackathon Family Tree

This comes from [here](https://github.com/HHEU/hackathon-family-tree)

Please add your Hackathon by submitting a PR!

<div class="mermaid">
graph TD;
Yahoo!Hack-->CharityHack;
Yahoo!Hack-->LeedsHack;
Yahoo!Hack-->Hacked.io;
Yahoo!Hack-->OverTheAir;
Mashed2008-->Hacked.io;
CharityHack-->BattleHack;
Hacked.io-->Hackference;
KingsOfCode-->Hackference;
LeedsHack-->HackManchester;
HackManchester-->Hack24;
Hack24-->LincolnHack;
Hack24-->HackTheMidlands;
Hackference-->BanterHack;
Hackference-->BrumHack;
Hackference-->HackNotts;
HackNotts-->AnvilHack;
AnvilHack-->SexTechHack;
HackNotts-->LaunchHack;
StudentHack-->LaunchHack;
LaunchHack-->DragonHacks;
LaunchHack-->HackNE;
LaunchHack-->LandingHack;
LaunchHack-->WarwickHACK;
WarwickHACK-->CUCCHack;
LaunchHack-->HackTheHolidays;
LaunchHack-->HackTheBurgh;
LaunchHack-->StacsHack;
StacsHack-->StirHack;
StacsHack-->StrathHack;
StacsHack-->HackDee;
StacsHack-->RGUHack;
PennApps-->KairosHacks;
KairosHacks-->HackUPC;
PennApps-->HackCambridge;
PennApps-->AGHacks;
MHacks-->AGHacks;
NationalHackTheGovernment-->YoungRewiredState;
YoungRewiredState-->BrumHack;
YoungRewiredState-->RUHacking;
BrumHack-->AstonHack;
BrumHack-->HackTheMidlands;
BrumHack-->HackBordeaux;
NationalHackTheGovernment-->ParlyHack;
NationalHackTheGovernment-->UKGovHack;
AngelHack-->jacobsHack!;
AngelHack-->StudentHack;
jacobsHack!-->CopenHacks;
jacobsHack!-->LauzHack;
LauzHack-->OpenFoodHackdays;
 jacobsHack!-->OxfordHack;
jacobsHack!-->DO!Hack;
StudentHack-->GreatUniHack;
HackKings-->HackLondon;
HackKings-->HackCortona;
HackLondon-->Porticode;
HackLondon-->HackCity;
ICHack;
StartHack;
HackZurich;
JPMCodeForGood-->DurHack;
HackaSoton-->HackTrain;
HackSheffield;
CUCCHack-->CovHack;
</div>

<script src="https://unpkg.com/mermaid@8.4.0/dist/mermaid.min.js"></script>
<script src="/static/js/svg-pan-zoom.min.js"></script>
<script>
function add_panzoom(id) {
    console.log(id)
    document.getElementById(id).setAttribute('height', '500px');
    const zoom = svgPanZoom(document.getElementById(id));
}

mermaid.initialize({
    startOnLoad:true,
    flowchart: {
        width: '100%',
        height: '500px',
        htmlLabels:true,
        curve: 'cardinal',
    },
    mermaid: {
        callback: add_panzoom
    }
});


</script>
