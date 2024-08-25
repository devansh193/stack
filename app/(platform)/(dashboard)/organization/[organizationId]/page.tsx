import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const OrganizationPage = () =>{
    const {userId, orgId} = auth();
    return (
        <div>
            OrganizationPage!
        </div>
    );
};

export default OrganizationPage;