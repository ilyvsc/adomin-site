"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { officialLinks, fanLinks } from "@/app/constants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ConnectSection() {
  return (
    <section className="py-20 bg-ado-key/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground"
        >
          Connect with Ado
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-accent-foreground mb-12 max-w-xl mx-auto"
        >
          Follow official accounts or join vibrant fan communities to celebrate
          together!
        </motion.p>

        <Tabs defaultValue="official" className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <TabsList className="inline-flex gap-2 p-1 rounded-full bg-muted transition-all">
              <TabsTrigger
                value="official"
                className="px-5 py-2 rounded-lg text-md font-semibold transition-all data-[state=active]:bg-ado-key/80 data-[state=active]:text-white"
              >
                Official
              </TabsTrigger>
              <TabsTrigger
                value="fan"
                className="px-5 py-2 rounded-lg text-md font-semibold transition-all data-[state=active]:bg-ado-key/80 data-[state=active]:text-white"
              >
                Fan Communities
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="official" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {officialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="flex flex-col justify-between h-full overflow-hidden bg-card hover:bg-card/90 transition-colors border-ado-key/20 hover:border-ado-key/40 shadow-sm hover:shadow-md">
                      <CardHeader className="flex flex-col gap-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          {link.icon}
                          <span className="break-words">{link.name}</span>
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {link.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fan" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fanLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="flex flex-col justify-between h-full overflow-hidden bg-card hover:bg-card/90 transition-colors border-ado-key/20 hover:border-ado-key/40 shadow-sm hover:shadow-md">
                      <CardHeader className="flex flex-col gap-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          {link.icon}
                          <span className="break-words">{link.name}</span>
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {link.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
