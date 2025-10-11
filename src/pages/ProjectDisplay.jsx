import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../Data/Data";
import { LockKeyhole, X } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDisplay = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));
  console.log(project);

  useEffect(() => {
    if (project) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [project]);

  if (!project) return null;

  return (
    // <!-- Overlay Wrapper -->
    <div
      id="overlay"
      // fixed inset-0 bg-black/20 backdrop-blur-[2px] h-screen z-50 flex items-center justify-center
      class="fixed inset-0 z-50 flex justify-center bg-[#DADFE4] backdrop-blur-[2px] transition-all duration-300 ease-out"
    >
      {/* <!-- Black Container (scrollable) --> */}
      <div class="relative bg-black mt-3 md:mx-10 md:mt-10 rounded-2xl min-h-[90vh] w-full flex justify-center items-start overflow-y-auto ">
        {/* <!-- Content Area --> */}
        {/* w-[90%] h-auto md:px-0 md:w-3/4 lg:w-2/4 rounded-2xl shadow-lg  bg-[#ddd] */}
        <div className="w-[90%] md:w-full flex justify-center flex-col items-center">
          <div class="md:px-0 md:w-3/4 lg:w-2/4 my-10 rounded-2xl shadow-lg bg-white   relative">
            <div className="bg-gray-300 h-[36px] flex rounded-t-2xl items-center justify-between  px-3">
              <div className=" flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center gap-2">
                  <LockKeyhole size={12} />
                  <div className="text-xs text-gray-700 font-medium">
                    {project.name}
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="  border font-bold hover:bg-red-500 hover:text-white hover:border-none p-1 text-[#242736] cursor-pointer transition"
              >
                <X size={12} />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus reiciendis officiis enim facilis, distinctio
              corporis deserunt, corrupti delectus adipisci sit omnis molestias
              quas voluptates quam cupiditate architecto odit! Accusantium,
              unde. Impedit incidunt, corporis voluptates distinctio atque iusto
              magni? Voluptate soluta consequuntur debitis illum veritatis quos,
              quae incidunt odio amet corrupti unde nobis iure aliquam
              perferendis accusamus delectus, fugit dolor ab. Eligendi provident
              saepe laborum, hic blanditiis distinctio asperiores quaerat est
              consequatur. Saepe reiciendis omnis excepturi alias magni velit,
              explicabo repudiandae. Possimus fugit, cumque quos tempora a
              distinctio at dolor doloribus! Natus ex sunt eveniet
              necessitatibus eligendi vero molestias accusantium quam tempore
              reiciendis? Molestiae architecto nostrum inventore aliquid
              voluptatem, doloremque pariatur eos omnis blanditiis itaque ex
              quasi veritatis quo velit obcaecati? Quos illo totam, quasi
              cupiditate, officia cum atque, esse optio eveniet non praesentium
              quibusdam similique? Debitis beatae doloribus recusandae quae
              aperiam dignissimos id est minima, eveniet corporis tempore, dolor
              nisi! Quia magni facilis assumenda, ratione officia tempora! Totam
              eius quos corporis autem deleniti rem soluta doloremque
              reprehenderit perferendis, sequi voluptate adipisci reiciendis
              est, natus similique sunt recusandae tempora porro. Consequatur!
              Quo explicabo dignissimos commodi nam qui ut sequi neque beatae.
              Nesciunt ullam laboriosam labore. Nisi similique, suscipit est et
              modi quod! Voluptates officiis sed, saepe similique eaque dolorem
              debitis nisi. Officia corrupti et, quae labore neque eum
              repellendus fugit aperiam ipsa assumenda veritatis necessitatibus
              vero sit. Possimus ipsum obcaecati explicabo autem veritatis
              laudantium maiores dicta, tempora distinctio illum porro beatae?
              Molestiae officia expedita quo, corporis adipisci voluptatem iusto
              voluptatum vero officiis repellendus dicta, ipsum veniam.
              Distinctio culpa quaerat repudiandae expedita, facilis nam
              quibusdam, nobis ad soluta repellendus animi libero autem. Aut
              quia, dolores a accusamus porro, dolore quos itaque iure dicta
              deserunt, veniam obcaecati nulla. Praesentium, exercitationem
              cumque a temporibus molestias culpa, quia nulla, placeat expedita
              pariatur quas consectetur? Dolorum? Enim pariatur nisi sunt
              consectetur obcaecati earum natus! Fugiat aliquam quibusdam
              laboriosam, vero tempora natus qui beatae rem corrupti recusandae
              consequatur ut? Cupiditate, id perferendis? Modi sint aut expedita
              quia. Numquam doloribus fugiat provident ratione deserunt fuga,
              nulla, cum accusamus quis placeat omnis itaque, odio impedit minus
              inventore aperiam ipsa aspernatur ad deleniti illo tenetur? Eaque,
              voluptatum! Quas, dignissimos non. Labore eligendi accusamus quos
              qui illum necessitatibus repellendus ratione, pariatur aliquid
              laboriosam ab, temporibus deleniti aliquam id maiores voluptatem,
              nemo facilis? Commodi, sunt mollitia! Nemo magnam quod officia
              adipisci animi? Maiores corporis eius quidem explicabo vero
              nesciunt corrupti perspiciatis, doloremque distinctio praesentium,
              delectus cupiditate tempora. Exercitationem nulla, dolores
              officia, earum at architecto itaque nemo, aut perferendis
              distinctio quia repellendus assumenda? Dignissimos, cupiditate
              dolorem repellendus obcaecati facere, nihil sint deserunt
              praesentium error quam tempore veniam eum. Rerum nemo earum
              provident vero maxime possimus eos soluta, obcaecati dolor nisi
              asperiores facilis optio. Fugiat eius unde nihil a, dicta earum.
              Porro rerum ab similique hic eaque, doloribus placeat, voluptate
              amet suscipit ipsam quos qui reiciendis odio ratione quod optio
              nemo deleniti, beatae magnam! Ullam nam accusantium nihil ex sequi
              maiores libero molestias nulla earum. Cupiditate, aliquam, quia et
              cumque doloremque corporis voluptatum ipsa, laborum harum dolorum
              alias recusandae officia. Voluptatem, veritatis rem. Provident.
              Cum provident quis earum quos, voluptates expedita esse
              voluptatibus commodi temporibus dolorem similique porro
              perspiciatis quam repudiandae nesciunt suscipit. Natus mollitia
              amet unde facere maiores quis accusantium consequuntur id
              reprehenderit! Totam, consequuntur repellat possimus ex voluptas
              vitae quis culpa? Voluptas sed, facere facilis illum qui ipsa
              voluptatibus fugit nobis sit minima explicabo iusto rem doloremque
              quaerat quo laboriosam nihil cum. Id laborum vitae a aperiam velit
              omnis repellendus dolores dolor. Veritatis doloribus tenetur
              fugiat hic blanditiis a fugit enim voluptates. Facere asperiores
              impedit, laborum atque quis totam? Eos, suscipit ipsum?
              Laboriosam, voluptate rerum! In distinctio culpa similique
              blanditiis consequatur libero. Minus reiciendis excepturi
              laudantium ab autem, natus sit id architecto deleniti facere error
              qui quis mollitia consequatur quisquam nostrum laboriosam.
              Explicabo at totam nostrum necessitatibus velit praesentium
              recusandae nisi aperiam? Tempora exercitationem eum eaque harum
              temporibus, tenetur iste inventore dolore illum corrupti omnis
              consequuntur accusamus necessitatibus, nobis iure? Velit, error!
              Qui veritatis, sequi placeat reiciendis vero perferendis laborum
              expedita commodi optio quis suscipit ipsam ducimus est dicta
              explicabo excepturi quod quia rem, consequatur, tempore autem
              reprehenderit eaque blanditiis? Ducimus, vel? Ab, nesciunt. Fugiat
              quaerat, soluta neque nostrum distinctio fuga exercitationem autem
              vel earum impedit perferendis ipsum similique rem quasi enim iste
              laborum, iure corrupti praesentium alias incidunt ratione magni
              accusamus. Dolorum dignissimos, cumque nobis velit quis distinctio
              doloremque, assumenda maiores quas laudantium reprehenderit
              voluptas ullam officia pariatur, consequuntur neque exercitationem
              quasi. Cumque similique, voluptates officiis incidunt suscipit
              eligendi et possimus? Vel nobis temporibus iure earum quod cum
              natus repudiandae sed sint fugiat consequuntur corrupti, ut
              sapiente deleniti aut accusantium pariatur tempore! In aut sit
              voluptas consequatur error ad quaerat corrupti! Illum, maiores
              repellendus dolorem illo et repudiandae cupiditate assumenda
              necessitatibus eos aliquam doloremque eius minus corrupti nostrum
              in beatae perspiciatis distinctio? Temporibus dignissimos
              voluptates sint consequatur facilis quibusdam tenetur assumenda!
              Dicta sit nulla dolor vero, ipsa at doloribus eaque, voluptas
              maxime numquam quisquam esse laboriosam magnam, ea laudantium
              autem. Laborum enim voluptas esse nesciunt autem debitis! Impedit
              cum vero voluptatum? Nulla odio magni eos totam incidunt quasi
              nisi vero! Unde, laudantium! Alias aut quidem, veniam perspiciatis
              debitis quibusdam, eum esse corporis aspernatur illo eaque ea
              consequuntur suscipit. Suscipit, magni at? Qui accusamus nostrum
              cum, hic praesentium cupiditate minima iste libero, vero debitis
              doloremque vel error veritatis sed quas eaque! Accusamus fugit eos
              temporibus quia voluptates quae magnam dolor cum nihil?
              Perferendis iure quae quia harum. Eum totam in cumque ea
              laboriosam minima facilis nisi unde doloribus quos aliquid
              accusamus, aperiam iste quidem architecto quia accusantium quo,
              eos aliquam! Laborum, quas? Impedit recusandae ab explicabo
              aspernatur nisi soluta necessitatibus quidem quisquam fuga beatae
              doloremque molestiae porro, dolore ad consectetur praesentium ipsa
              error consequatur voluptatem? Sit numquam facilis quae, odit quas
              beatae. Nemo quas similique, mollitia ratione natus eius dolorum
              neque facilis sit veritatis. Dolorum explicabo laudantium at
              assumenda perspiciatis, voluptatum incidunt repudiandae tempora
              suscipit veniam eligendi sed et itaque odio omnis. Eligendi sequi
              harum a doloribus animi doloremque quam sunt fugit tempora
              consectetur culpa dolor necessitatibus cupiditate ad cumque
              reiciendis, blanditiis inventore fuga adipisci. Dolorem sit ipsam,
              tenetur eius aliquid deserunt! Dignissimos consequatur ratione
              iure recusandae, repudiandae, nostrum animi sequi a reiciendis
              illo aut earum iste labore harum modi officiis quidem alias sed
              placeat omnis nemo provident id natus porro. Error! Rem nam,
              recusandae deserunt asperiores, quae consectetur optio distinctio
              facere dolore voluptate atque eum necessitatibus error? Ut
              provident praesentium minima autem quas unde, porro doloribus
              accusamus dolor deserunt illum assumenda. Error debitis
              recusandae, voluptatum repellendus qui, ab iure sunt quidem eius
              esse sapiente provident placeat atque ipsum exercitationem. Sed,
              voluptatem assumenda. Beatae, at ab. Nulla sequi delectus corrupti
              quisquam dolorum. Laboriosam omnis, reiciendis totam sunt nesciunt
              dicta autem consectetur consequuntur culpa fugit soluta molestiae
              ab sed necessitatibus perferendis. Velit tenetur nostrum sequi
              aliquid culpa non voluptatem expedita nulla atque voluptatibus?
              Quae pariatur ea necessitatibus ipsam facilis! Porro facilis
              itaque qui. Ea, qui velit deleniti, culpa illum dolores modi
              eligendi sit id quod amet distinctio recusandae iusto non, error
              aperiam odit. Hic natus atque alias magnam id? Ad, magnam.
              Voluptatum, in corporis repudiandae, esse asperiores aperiam
              suscipit ipsum ratione sequi repellat quos, dolore labore. Eum
              praesentium quidem distinctio necessitatibus nisi perferendis.
              Dolor modi, repellat omnis architecto, dicta distinctio itaque
              voluptatum obcaecati commodi labore officia rem provident.
              Perspiciatis laboriosam delectus eaque! Recusandae fuga magni
              magnam aspernatur atque, voluptate dicta necessitatibus vel
              consequuntur! Cumque, sapiente temporibus, tenetur eaque, tempora
              vel molestiae deserunt eum accusamus sint nobis incidunt dolores
              minima quam repellat illo animi maiores nihil nesciunt? Optio illo
              excepturi incidunt! Eos, voluptatibus reiciendis! Soluta unde ea
              ex quisquam nostrum corrupti repellat recusandae exercitationem
              non minima, officia illum eveniet sed dignissimos beatae. Itaque
              molestiae quia quo laudantium ut error in reprehenderit porro.
              Odit, sint. Provident quasi rerum repudiandae delectus non at modi
              distinctio, rem quis impedit similique aliquid perspiciatis natus
              voluptates voluptatum nihil eum laboriosam, nulla iure accusamus
              reprehenderit quas aspernatur. Necessitatibus, vel mollitia.
              Distinctio, similique alias aliquid nisi error fugiat, magni
              accusantium sunt vitae exercitationem quas amet repellat nesciunt
              commodi soluta ad minima numquam deleniti voluptatum. Esse
              placeat, doloribus ipsa consequatur nihil quo? Commodi nihil
              nostrum magni dolore deleniti, ut suscipit illum fugiat rerum
              placeat, hic optio corporis. Deleniti at facilis repellendus esse
              numquam porro pariatur nesciunt nemo vel ut, facere assumenda
              nisi! Reprehenderit placeat deleniti quam? Incidunt corrupti
              adipisci reiciendis optio? Debitis quis quibusdam enim expedita et
              corporis ea officia repellat consectetur recusandae ex sunt neque
              molestias libero dolore vel, quaerat unde. Veritatis mollitia
              temporibus saepe nulla delectus perspiciatis consequatur similique
              aperiam non velit praesentium, itaque quia repellendus eius quam
              qui adipisci deleniti, eveniet laboriosam aliquid sequi beatae at
              iure! Officiis, rerum? Doloremque voluptas eligendi eius
              voluptatem? Omnis, est consequuntur repudiandae, architecto quam
              nisi, voluptatum maxime maiores sunt recusandae nihil ad quasi
              cumque iste corporis eius perferendis reiciendis praesentium.
              Sunt, doloribus voluptatum! Saepe voluptatum similique, non
              molestiae natus repudiandae. Unde cumque eius, voluptas non odit
              officiis at vitae aspernatur illum pariatur sapiente repudiandae
              inventore, accusantium enim nesciunt consectetur quia velit
              debitis ipsum!
            </p>
          </div>

          <div class="is-txt-case-contact-bg">Contact</div>
          

          <div className="relative text-[214px] md:text-[320px] w-full text-center pb-4 uppercase font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-[#2b2a2a] to-black/20">
            contact
            <Link
              to="www.gmail.com"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               text-red-600 text-[30px] md:text-[50px] tracking-[1px] capitalize font-['Space_Grotesk'] 
               flex items-center justify-center"
            >
              Let's work together
            </Link>
          </div>
        </div>
      </div>
      {/* <p className="text-[300px]"> a</p> */}
    </div>

    // <div className=" fixed inset-0 bg-black/20 backdrop-blur-[2px] h-screen z-50 flex items-center justify-center">
    //   <div className=" px-0 md:mx-10 mt-5 md:mt-10 rounded-lg w-full min-h-screen bg-black flex justify-center pt-20 overflow-y-auto">

    //     <div className="w-[90%] h-auto md:px-0 md:w-3/4 lg:w-2/4 rounded-2xl shadow-lg  bg-[#ddd]">
    //       <div className="bg-gray-400 h-[36px] flex rounded-t-2xl items-center justify-between  px-3">
    //         <div className=" flex items-center gap-4">
    //           <div className="flex gap-1.5">
    //             <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
    //             <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
    //             <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <LockKeyhole size={12} />
    //             <div className="text-xs text-gray-700 font-medium">
    //               {project.name}
    //             </div>
    //           </div>
    //         </div>
    //         <button
    //           onClick={() => navigate(-1)}
    //           className="  hover:text-gray-600 border font-bold hover:bg-red-500 hover:text-white hover:border-none p-1 text-[#242736] cursor-pointer transition"
    //         >
    //           <X size={12} />
    //         </button>
    //       </div>
    //       <p>Lorem*100</p>
    //     </div>

    //   </div>
    // </div>
  );
};

export default ProjectDisplay;
