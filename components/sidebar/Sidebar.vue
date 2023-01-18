<script setup>
const config = useAppConfig()
const { openContactModal } = useContactModal()
</script>

<template>
  <aside
    relative
    contents
    inset-y-none
    left-none
    hidden
    lg:flex
    flex-col
    flex-none
    overflow-y-auto
    transition
    duration-200
    ease-in-out
    w-52
    xl:w-62
    z-auto
  >
    <div flex-1 space-y-6 h-full px-1 py-2>
      <div flex flex-col gap-4>
        <div flex flex-col justify-center p-2>
          <div flex flex-none items-center>
            <NuxtLink to="/" :aria-label="config.name">
              <Logo w-10 text-white />
            </NuxtLink>
          </div>
        </div>

        <nav flex flex-col gap-4>
          <SidebarSection>
            <SidebarNavLink icon="Shapes" href="/" shortcut="1">
              Recents
            </SidebarNavLink>
            <SidebarNavLink icon="User" href="/about" shortcut="2">
              About
            </SidebarNavLink>
            <SidebarNavLink icon="Code" href="/projects" shortcut="3">
              Projects
            </SidebarNavLink>
          </SidebarSection>

          <SidebarSection label="Resources">
            <SidebarNavLink icon="Stack" href="/stack" shortcut="4">
              Stack
            </SidebarNavLink>
            <SidebarNavLink icon="Bookmark" href="/bookmarks" shortcut="5">
              Bookmarks
            </SidebarNavLink>
            <SidebarNavLink icon="Notes" href="/notes" shortcut="6">
              Notes
            </SidebarNavLink>
          </SidebarSection>

          <SidebarSection label="Stay in touch">
            <SidebarNavButton icon="Chat" shortcut="/" @click="openContactModal">
              Contact
            </SidebarNavButton>
            <SidebarNavLink
              icon="Twitter"
              external
              :to="config.socials.twitter"
              target="_blank"
            >
              Twitter
            </SidebarNavLink>
            <SidebarNavLink
              icon="Github"
              external
              :to="config.socials.github"
              target="_blank"
            >
              GitHub
            </SidebarNavLink>
          </SidebarSection>
        </nav>
      </div>
    </div>
  </aside>
</template>
